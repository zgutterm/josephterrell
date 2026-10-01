import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const description =
  "Official website of Joseph Terrell — singer, songwriter, and guitarist from North Carolina. Music, shows, and videos.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "Joseph Terrell",
    template: "%s | Joseph Terrell",
  },
  description,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    siteName: "Joseph Terrell",
    title: "Joseph Terrell",
    description,
    images: [{ url: `${SITE_URL}/og.jpg`, width: 1200, height: 630, alt: "Joseph Terrell playing guitar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Terrell",
    description,
    images: [`${SITE_URL}/og.jpg`],
  },
  appleWebApp: {
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
