import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "./_component/Wrapper";
import FixedOverlay from "./_component/FixedOverlay";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiteGPT - Make AI your expert customer support agent",
  description: "abhishek gusain",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white scroll-pt-[3.5625rem]">
      <Script
        src="https://fast.wistia.com/embed/medias/7x0n5t4hx2.jsonp"
        strategy="lazyOnload"
      />
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />
      <body className={`${inter.className} h-full bg-white font-sans text-gray-900 antialiased`}>
        <FixedOverlay />
        <Wrapper>
          <Header />
          {/* <Headerv2 /> */}
          {children}
          <Footer />
        </Wrapper>
        </body>
    </html>
  );
}
