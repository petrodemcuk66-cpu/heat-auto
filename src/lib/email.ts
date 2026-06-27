import nodemailer from "nodemailer";
import type { LeadInput } from "@/lib/lead";

export async function sendLeadEmail(lead: LeadInput) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.LEAD_NOTIFY_EMAIL;

  if (!host || !user || !pass || !from || !to) {
    return { ok: true, skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  await transporter.sendMail({
    from,
    to,
    subject: `Нова заявка HEAT AUTO: ${lead.phone}`,
    text: [
      `Імʼя: ${lead.name}`,
      `Телефон: ${lead.phone}`,
        lead.budget ? `Бюджет: ${lead.budget}` : "",
      lead.country ? `Країна: ${lead.country}` : "",
      lead.car ? `Авто: ${lead.car}` : "",
      lead.message ? `Коментар: ${lead.message}` : ""
    ].filter(Boolean).join("\n")
  });

  return { ok: true };
}
