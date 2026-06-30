import type { LeadInput } from "@/lib/lead";

type SalesDriveResult =
  | { ok: true; skipped?: false; data: unknown; orderId?: string }
  | { ok: true; skipped: true; reason: string }
  | { ok: false; status: number; error: string; data?: unknown };

type JsonRecord = Record<string, unknown>;

function removeEmpty<T extends JsonRecord>(object: T) {
  return Object.fromEntries(
    Object.entries(object).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

function normalizeSalesDriveDomain(domain?: string) {
  if (!domain) return "";

  return domain
    .trim()
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .replace(/\.salesdrive\.me$/i, "")
    .replace(/\/$/, "");
}

export function buildSalesDriveComment(lead: LeadInput, userAgent?: string | null) {
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
    lead.utm_term ? `UTM term: ${lead.utm_term}` : "",
    lead.utm_content ? `UTM content: ${lead.utm_content}` : "",
    userAgent ? `User-Agent: ${userAgent}` : ""
  ]
    .filter(Boolean)
    .join("\n");
}

function extractOrderId(data: unknown) {
  if (typeof data !== "object" || data === null) return undefined;

  const record = data as JsonRecord;
  const nestedData = typeof record.data === "object" && record.data !== null ? (record.data as JsonRecord) : undefined;

  const id =
    record.orderId ||
    record.order_id ||
    record.id ||
    nestedData?.orderId ||
    nestedData?.order_id ||
    nestedData?.id;

  return id ? String(id) : undefined;
}

function buildSalesDrivePayload(lead: LeadInput, options?: { userAgent?: string | null }) {
  const comment = buildSalesDriveComment(lead, options?.userAgent);
  const externalId = `heat-auto-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  return removeEmpty({
    getResultData: 1,
    externalId,
    fName: lead.name.trim(),
    lName: "",
    mName: "",
    phone: lead.phone.trim(),
    email: lead.email?.trim() || "",
    comment,
    con_comment: comment,
    sajt: "HEAT AUTO",
    organizationId: "",
    utmPage: lead.page_url || "https://heat-auto.vercel.app",
    utmSource: lead.utm_source || "website",
    utmMedium: lead.utm_medium || "lead_form",
    utmCampaign: lead.utm_campaign || "heat-auto",
    utmContent: lead.utm_content || "",
    utmTerm: lead.utm_term || "",
    products: [
      removeEmpty({
        text: lead.car || "Заявка на підбір авто",
        name: lead.car || "Заявка на підбір авто",
        amount: 1,
        price: 0,
        description: [
          lead.country ? `Країна: ${lead.country}` : "",
          lead.budget ? `Бюджет: ${lead.budget}` : "",
          lead.message || ""
        ]
          .filter(Boolean)
          .join("\n")
      })
    ]
  });
}

export async function createSalesDriveOrder(
  lead: LeadInput,
  options?: { userAgent?: string | null }
): Promise<SalesDriveResult> {
  const apiKey = process.env.SALESDRIVE_API_KEY;
  const domain = normalizeSalesDriveDomain(process.env.SALESDRIVE_DOMAIN || "heatauto.salesdrive.me");

  if (!apiKey || !domain) {
    return {
      ok: true,
      skipped: true,
      reason: "SALESDRIVE_API_KEY або SALESDRIVE_DOMAIN не заповнені. Заявка збережена локально."
    };
  }

  const endpoint = `https://${domain}.salesdrive.me/handler/`;
  const payload = buildSalesDrivePayload(lead, options);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Api-Key": apiKey
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
        error: typeof data === "string" ? data : JSON.stringify(data),
        data
      };
    }

    if (typeof data === "object" && data !== null && "error" in data) {
      return {
        ok: false,
        status: 400,
        error: String((data as JsonRecord).error),
        data
      };
    }

    return {
      ok: true,
      data,
      orderId: extractOrderId(data)
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      error: error instanceof Error ? error.message : "SalesDrive request failed"
    };
  }
}
