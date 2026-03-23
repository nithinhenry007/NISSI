import type { Metadata } from "next";
import { Inter, Montserrat, Syne } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Nissi FRP",
  description: "Products that actually last. Zero maintenance.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#111111]" suppressHydrationWarning>
      <body
        className={`${inter.className} ${inter.variable} ${montserrat.variable} ${syne.variable} antialiased bg-[#111111] text-white selection:bg-[#ff6a00] flex flex-col min-h-screen font-sans`}
      >
        <Navigation />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
