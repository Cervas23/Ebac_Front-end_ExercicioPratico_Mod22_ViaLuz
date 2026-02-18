import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "ViaLuz",
  description: "Todo o planejamento da sua viagem feito tão rápido e perfeito, quanto a velocidade da luz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
