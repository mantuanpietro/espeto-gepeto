import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Espetos Gepeto | Espetinhos na Brasa",
  description: "Espetos grelhados na brasa com sabor de verdade. Ingredientes frescos, preparação artesanal e atendimento de qualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white font-inter">
        <Header />
        <main className="flex-1">
          {children}
        </main>
       <Footer />
      </body>
    </html>
  );
}

