import type { LeadInput } from "@/lib/lead";

const KEYCRM_BASE_URL = "https://openapi.keycrm.app/v1";

type KeycrmResult =
  | { ok: true; skipped?: false; data: unknown; cardId?: string }
  | { ok: true; skipped: true; reason: string }
  | { ok: false; status: number; error: string };

function toNumber(value?: string) {
  if (!value) return undefined;
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : undefined;
}

function removeEmpty<T extends Record<string, unknown>>(object: T) {
  return Object.fromEntries(
    Object.entries(object).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

export function buildManagerComment(lead: LeadInput, userAgent?: string | null) {
  return [
    "Заявка з сайту HEAT AUTO",
    `Імʼя: ${lead.name}`,
    `Телефон: ${lead.phone}`,
    lead.budget ? `Бюджет: ${lead.budget}` : "",
    lead.country ? `Країна: ${lead.country}` : "",
    lead.car ? `Авто: ${lead.car}` : "",
    lead.message ? `Коментар: ${lead.message}` : "",
    lead.page_url ? `Сторінка: ${lead.page_url}` : "",
    lead.referrer ? `Referrer: ${lead.referrer}` : "",
    lead.utm_source ? `UTM source: ${lead.utm_source}` : "",
    lead.utm_medium ? `UTM medium: ${lead.utm_medium}` : "",
    lead.utm_campaign ? `UTM campaign: ${lead.utm_campaign}` : "",
    userAgent ? `User-Agent: ${userAgent}` : ""
  ]
    .filter(Boolean)
    .join("\n");
}

function extractCardId(data: unknown) {
  if (typeof data !== "object" || data === null) return undefined;
  const record = data as Record<string, unknown>;
  const id = record.id || (record.data as Record<string, unknown> | undefined)?.id;
  return id ? String(id) : undefined;
}

export async function createKeycrmPipelineCard(
  lead: LeadInput,
  options?: { userAgent?: string | null }
): Promise<KeycrmResult> {
  const apiKey = process.env.KEYCRM_API_KEY;

  if (!apiKey) {
    return {
      ok: true,
      skipped: true,
      reason: "KEYCRM_API_KEY не заповнений. Заявка збережена у внутрішній CRM."
    };
  }

  const payload = removeEmpty({
    title: `Заявка з сайту: ${lead.car || lead.country || lead.budget || lead.phone}`,
    source_id: toNumber(process.env.KEYCRM_SOURCE_ID),
    manager_id: toNumber(process.env.KEYCRM_MANAGER_ID),
    pipeline_id: toNumber(process.env.KEYCRM_PIPELINE_ID),
    manager_comment: buildManagerComment(lead, options?.userAgent),
    contact: removeEmpty({
      full_name: lead.name,
      phone: lead.phone
    }),
    utm_source: lead.utm_source,
    utm_medium: lead.utm_medium,
    utm_campaign: lead.utm_campaign,
    utm_term: lead.utm_term,
    utm_content: lead.utm_content
  });

  const response = await fetch(`${KEYCRM_BASE_URL}/pipelines/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  let data: unknown;

  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      error: typeof data === "string" ? data : JSON.stringify(data)
    };
  }

  return {
    ok: true,
    data,
    cardId: extractCardId(data)
  };
}
