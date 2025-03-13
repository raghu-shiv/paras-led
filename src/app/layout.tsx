import type { Metadata } from "next";
import { Lora, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: "italic",
});

export const metadata: Metadata = {
  title: "Paras LED Lights",
  description: "A wholesale company for various LED lights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} ${lora.variable} antialiased overflow-x-hidden`}
      >
        <Image
          src="/decor/Asset3.png"
          width={500}
          height={500}
          className="absolute top-5 left-1/2 transform -translate-x-1/2 w-lg md:w-md sm:w-sm"
          alt="Decorative Element"
        />

        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
