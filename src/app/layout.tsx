import { Inter } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "./QuoteContext";
import { NavBar } from "../components/NavBar";
import { ThemeProvider } from "../components/ThemeProvider";
import type { Layout } from "@/types";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Random Quotes Application",
  description: "Random Quotes Application 200825",
};

export default function RootLayout({ children }: Layout) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased `}
    >
      <body className="min-h-full flex flex-col ">
        <ThemeProvider>
          <NavBar />
          <QuoteProvider>{children}</QuoteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
