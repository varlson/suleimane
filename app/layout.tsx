import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fira_code, jura, nunito, syne } from "@/util/fonts";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "SULEIMANE - DUCURE",
  description: "Portfólio do SUleimane Ducure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito} ${syne} ${jura} ${fira_code}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
