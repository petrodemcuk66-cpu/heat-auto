import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const runtime = "nodejs";

const reviewSchema = z.object({
  name: z.string().min(2),
  city: z.string().min(2),
  car: z.string().min(2),
  text: z.string().min(10),
  rating: z.coerce.number().min(1).max(5).default(5)
});

export async function POST(request: Request) {
  try {
    const data = reviewSchema.parse(await request.json());

    await prisma.review.create({
      data: {
        name: data.name,
        city: data.city,
        car: data.car,
        text: data.text,
        rating: data.rating,
        visible: false
      }
    });

    return NextResponse.json({ ok: true, message: "Відгук отримано" });
  } catch {
    return NextResponse.json({ ok: false, message: "Некоректні дані" }, { status: 400 });
  }
}
