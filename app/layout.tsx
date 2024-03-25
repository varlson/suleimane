import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fira_code, jura, nunito, syne } from "@/util/fonts";
import Footer from "@/components/ui/Footer";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

export const metadata: Metadata = {
  title: "SULEIMANE - DUCURE",
  description: "Portfólio do SUleimane Ducure",
  authors: [{ url: "https://github.com/varlson", name: "SULEIMANE DUCURE" }],
  keywords: ["SULEIMANE DUCURE", "DUCURE", "MANITO", "MANI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${nunito} ${syne} ${jura} ${fira_code}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
