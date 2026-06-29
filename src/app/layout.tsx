import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaisurya Badathala",
  description:
    "Infrastructure & Security Engineer building secure cloud systems and preparing for AI Security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}