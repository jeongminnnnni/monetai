import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monetai | AI Marketing Solution - Unlock Hidden Revenue",
  description: "Predict non-paying customers with AI and unlock hidden revenue with personalized discounts. Maximize profits by targeting only users with low purchase probability.",
  keywords: ["AI Marketing", "In-app Purchase", "Conversion Optimization", "Machine Learning", "Targeted Marketing"],
  openGraph: {
    title: "Monetai | AI Marketing Solution",
    description: "Predict non-paying customers with AI and unlock hidden revenue with personalized discounts.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} ${inter.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
