import { Inconsolata } from 'next/font/google'

import type { Metadata } from "next";

import "./globals.css";

const inconsolata = Inconsolata({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "mael bomane",
  description: "solana developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
