import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "../components/theme-switch";
import ActionSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

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
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className=" bg-[#3c6e71] bg-opacity-40 dark:bg-[#acbfa4] dark:bg-opacity-40 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className=" bg-[#353535] bg-opacity-40 dark:bg-[#e2e8ce] dark:bg-opacity-40 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActionSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-left" />
            <ThemeSwitch />
          </ActionSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
