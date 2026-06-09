import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({
      ok: true,
      service: "HEAT AUTO Enterprise",
      database: true,
      time: new Date().toISOString()
    });
  } catch {
    return NextResponse.json({
      ok: false,
      service: "HEAT AUTO Enterprise",
      database: false,
      message: "База даних не підключена або міграції не виконані"
    }, { status: 500 });
  }
}
