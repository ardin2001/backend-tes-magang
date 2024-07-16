import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WrapperSession from "./wrapper/WrapperSession";
import SidebarContextProvider from "./context/SidebarContext";
import ThemeContextProvider from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soul Cafe App",
  description: "Welcomebek my app mamankkkk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <WrapperSession>
          <SidebarContextProvider>
            <ThemeContextProvider>
            {children}
            </ThemeContextProvider>
          </SidebarContextProvider>
        </WrapperSession>
      </body>
    </html>
  );
}
