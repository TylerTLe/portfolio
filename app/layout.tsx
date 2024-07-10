import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "../components/theme-switch";
import ActionSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import CursorLight from "@/components/Cursor";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tyler Le | Portfolio",
  description: "Tyler Le full stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        <CursorLight />
        <ThemeContextProvider>
          <ActionSectionContextProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
            <Toaster position="top-left" />
            <ThemeSwitch />
          </ActionSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
