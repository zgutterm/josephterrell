import type { Metadata } from "next";
import { Outfit, DM_Sans, Caveat } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

// Alternate design kept for review only
export const metadata: Metadata = {
  title: "Alternate design",
  robots: { index: false, follow: false },
};

export default function OriginalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${outfit.variable} ${dmSans.variable} ${caveat.variable} flex flex-1 flex-col bg-brand-dark font-body`}
    >
      {children}
    </div>
  );
}
