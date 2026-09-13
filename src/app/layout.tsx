import type { Metadata, Viewport } from "next";
import { Commissioner } from "next/font/google";
import { SITE_URL } from "@/app/site";
import "./globals.css";

const name = "creative";
const title = `${name} | Branding & website design agency`;
const description =
  "Visual storytelling for small businesses: cohesive brand and website design that leaves a lasting impression on audiences in a digital world.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Two designers at their laptops, beside the word creative under the line Branding & website design agency.",
};

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${commissioner.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
