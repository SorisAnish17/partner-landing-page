import type { Metadata } from "next";
import { MainLayout } from "../layout/main";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Galleycloud Partner Page",
  description: "Explore partnership benefits with Galleycloud.",
  keywords: "Galleycloud, partnership, benefits, partners, aviation",
  author: "Your Name",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
