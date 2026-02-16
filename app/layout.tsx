import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Netblade Consulting | Website Development, Digital Marketing & Business Services",
  description: "Netblade Consulting helps startups and businesses grow with website development, digital marketing, bookkeeping, and compliance support. Get expert consulting today.",
  keywords: "website development, digital marketing, financial services, SEO, social media marketing, business registration, GST, ITR, compliance",
  openGraph: {
    title: "Netblade Consulting | Website Development, Digital Marketing & Business Services",
    description: "Netblade Consulting helps startups and businesses grow with website development, digital marketing, bookkeeping, and compliance support.",
    type: "website",
    url: "https://netbladeconsulting.in",
    siteName: "Netblade Consulting",
    images: [
      {
        url: "https://netbladeconsulting.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Netblade Consulting - Your Digital & Financial Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netblade Consulting | Website Development, Digital Marketing & Business Services",
    description: "Grow your business with expert website development, digital marketing, and financial services.",
    images: ["https://netbladeconsulting.in/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
