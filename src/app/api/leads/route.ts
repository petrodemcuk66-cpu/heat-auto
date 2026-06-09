import { NextResponse } from "next/server";
import { leadSchema, normalizeLeadInput } from "@/lib/lead";
import { prisma } from "@/lib/prisma";
import { sendTelegramMessage } from "@/lib/telegram";
import { createKeycrmPipelineCard } from "@/lib/keycrm";
import { sendLeadEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = leadSchema.parse(body);
    const userAgent = request.headers.get("user-agent");

    let internalLeadId: string | null = null;
    let databaseSaved = false;

    try {
      const lead = await prisma.lead.create({
        data: {
          ...normalizeLeadInput(data),
          userAgent,
          source: "website"
        }
      });

      internalLeadId = lead.id;
      databaseSaved = true;
    } catch {
      databaseSaved = false;
    }

    const crm = await createKeycrmPipelineCard(data, { userAgent });

    if (databaseSaved && internalLeadId && crm.ok && !crm.skipped && crm.cardId) {
      await prisma.lead.update({
        where: { id: internalLeadId },
        data: { keycrmCardId: crm.cardId }
      }).catch(() => null);
    }

    if (databaseSaved && internalLeadId) {
      await prisma.auditLog.create({
        data: {
          action: "lead.created",
          entity: "Lead",
          entityId: internalLeadId,
          payload: { crm }
        }
      }).catch(() => null);
    }

    const notificationText = [
      "<b>Нова заявка з сайту HEAT AUTO</b>",
      internalLeadId ? `ID: ${internalLeadId}` : "",
      `Імʼя: ${data.name}`,
      `Телефон: ${data.phone}`,
      data.email ? `Email: ${data.email}` : "",
      data.budget ? `Бюджет: ${data.budget}` : "",
      data.country ? `Країна: ${data.country}` : "",
      data.car ? `Авто: ${data.car}` : "",
      data.message ? `Коментар: ${data.message}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    await Promise.allSettled([
      sendTelegramMessage(notificationText),
      sendLeadEmail(data)
    ]);

    return NextResponse.json({
      ok: true,
      message: "Дякуємо! Ми зателефонуємо протягом 15 хвилин.",
      leadId: internalLeadId,
      databaseSaved,
      crm
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Перевірте, будь ласка, імʼя та номер телефону."
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Lead API is ready"
  });
}
