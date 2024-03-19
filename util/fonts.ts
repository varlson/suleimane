import { Nunito, Syne, Jura, Fira_Code } from "next/font/google";

const nunito_init = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "500", "700"],
  variable: "--font-nunito",
});

const syne_init = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
});

const jura_init = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jura",
});

const fira_code_init = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira_code",
});

export const nunito = nunito_init.variable;
export const jura = jura_init.variable;
export const syne = syne_init.variable;
export const fira_code = fira_code_init.variable;
