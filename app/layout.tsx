import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshit Kumar | Frontend Developer",
  description: "Harshit Kumar is a Frontend Developer specializing in React.js, Next.js, TypeScript and responsive web experiences.",
  openGraph: {
    title: "Harshit Kumar | Frontend Developer",
    description: "Building digital experiences with React.js and Next.js.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}