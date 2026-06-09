import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Вкажіть імʼя"),
  phone: z.string().min(7, "Вкажіть номер телефону"),
  email: z.string().email("Некоректний email").optional().or(z.literal("")),
  budget: z.string().optional(),
  country: z.string().optional(),
  car: z.string().optional(),
  message: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  page_url: z.string().optional(),
  referrer: z.string().optional()
});

export type LeadInput = z.infer<typeof leadSchema>;

export function normalizeLeadInput(data: LeadInput) {
  return {
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email?.trim() || null,
    budget: data.budget?.trim() || null,
    country: data.country?.trim() || null,
    car: data.car?.trim() || null,
    message: data.message?.trim() || null,
    utmSource: data.utm_source || null,
    utmMedium: data.utm_medium || null,
    utmCampaign: data.utm_campaign || null,
    utmTerm: data.utm_term || null,
    utmContent: data.utm_content || null,
    pageUrl: data.page_url || null,
    referrer: data.referrer || null
  };
}
