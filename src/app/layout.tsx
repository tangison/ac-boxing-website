import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AC Boxing Sport & Entertainment | Developing Boxers. Building Champions.",
  description:
    "AC Boxing Sport & Entertainment is a Windhoek-based non-profit sports development organisation advancing boxing in Namibia — grassroots youth development, the AC Boxing Academy infrastructure project, and professional boxing through AC Promotions.",
  keywords: [
    "AC Boxing",
    "Namibia boxing",
    "Windhoek",
    "youth development",
    "AC Promotions",
    "boxing academy",
    "non-profit sport",
  ],
  openGraph: {
    title: "AC Boxing Sport & Entertainment",
    description:
      "Developing Boxers. Building Champions. Creating Opportunity. Grassroots boxing, athlete development and professional promotion in Windhoek, Namibia.",
    siteName: "AC Boxing Sport & Entertainment",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
