import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testing Page",
  description: "Testing page without the main layout",
};

export default function TestingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white">
      <body className={`${inter.className} h-full bg-white font-sans text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}