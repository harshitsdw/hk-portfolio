import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshit Kumar | Frontend Developer & UI Specialist (React, Next.js, TypeScript)",
  description: "Harshit Kumar is an expert Frontend Developer with 3+ years experience building modern, high-speed, and responsive web applications with React.js, Next.js, and TypeScript.",
  keywords: [
    "Harshit Kumar",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "UI Specialist",
    "Web Developer India",
    "Tailwind CSS",
    "Frontend Engineer"
  ],
  authors: [{ name: "Harshit Kumar", url: "https://github.com/webgashwatechnologies2-alt" }],
  openGraph: {
    title: "Harshit Kumar | Frontend Developer & UI Specialist",
    description: "Building modern, high-performance web applications that drive real business results with React.js, Next.js & TypeScript.",
    url: "https://harshit-portfolio.dev",
    siteName: "Harshit Kumar Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Kumar | Frontend Developer & UI Specialist",
    description: "Building modern, high-performance web applications with React.js, Next.js & TypeScript."
  }
};

export const viewport: Viewport = {
  themeColor: "#0b0f17",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
