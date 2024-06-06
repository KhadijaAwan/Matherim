import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matherim",
  description: "Matherim is a nextjs application which performs different mathematical operations.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  keywords: ["calci", "mathematician", "calculator in nextjs", "calculator"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
