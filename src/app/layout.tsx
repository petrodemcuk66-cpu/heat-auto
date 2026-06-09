import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.seoTitle,
  description: site.seoDescription,
  keywords: [
    "авто з США",
    "авто з Європи",
    "авто з Європи",
    "авто під ключ",
    "пригнати авто",
    "розмитнення авто",
    "підбір авто",
    "автоімпорт Україна"
  ],
  openGraph: {
    title: site.seoTitle,
    description: site.seoDescription,
    images: ["/og/og-image.jpg"],
    type: "website",
    locale: "uk_UA"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050507"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
