import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "SkyGlider | Effortless Movement Anywhere You Sit",
  description: "Keep your body in motion with SkyGlider - a simple, portable tool designed to bring effortless movement into your daily routine. Perfect for travelers, office workers, and anyone combating a sedentary lifestyle.",
  keywords: ["SkyGlider", "movement", "portable", "wellness", "leg exercise", "travel", "office wellness"],
  authors: [{ name: "SkyGlider" }],
  openGraph: {
    title: "SkyGlider | Effortless Movement Anywhere You Sit",
    description: "Keep your body in motion with SkyGlider - a simple tool to bring movement into your daily routine.",
    url: "https://theskyglider.com",
    siteName: "SkyGlider",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyGlider | Effortless Movement Anywhere You Sit",
    description: "Keep your body in motion with SkyGlider - a simple tool to bring movement into your daily routine.",
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
