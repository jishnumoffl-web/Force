import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FORCE | Federation of Owners for Resources, Care & Employment",
  description:
    "FORCE is dedicated to empowering communities through care services, employment opportunities, security solutions, homecare, and professional support.",
  keywords: [
    "FORCE",
    "Homecare",
    "Employment",
    "Care Services",
    "Security Services",
    "Community Welfare",
    "Kerala",
  ],
  authors: [{ name: "FORCE" }],
  openGraph: {
    title: "FORCE",
    description:
      "Federation of Owners for Resources, Care & Employment",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
