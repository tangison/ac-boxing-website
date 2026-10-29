import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AC Boxing, Windhoek | From age four to fight night",
  description:
    "AC Boxing Sport & Entertainment is a non-profit boxing organisation in Windhoek, Namibia: a grassroots gym of young boxers, the AC Boxing Academy rising at Eros Primary School, and professional promotion through AC Promotions.",
  keywords: [
    "AC Boxing",
    "Windhoek boxing",
    "Namibia",
    "youth boxing",
    "AC Promotions",
    "Eros Primary School",
    "non-profit sport",
  ],
  openGraph: {
    title: "AC Boxing, Windhoek",
    description:
      "A non-profit gym developing young boxers and professional champions, at Eros Primary School, Windhoek.",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
