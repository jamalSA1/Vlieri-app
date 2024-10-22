import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Vlieri",
    absolute: "Vlieri",
  },
  description: "Vlieri هي منصة تجارة إلكترونية حديثة مخصصة لتوفير تجربة تسوق سلسة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}
