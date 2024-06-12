import type { Metadata } from "next";
import local from "next/font/local";
import "./globals.css";

const pixel = local({ src: '../assets/fonts/pixel.ttf' });

export const metadata: Metadata = {
  title: "€$¥",
  description: "solana developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pixel.className}>{children}</body>
    </html>
  );
}
