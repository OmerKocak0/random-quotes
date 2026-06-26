import { Inter } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "./QuoteContext";
import { NavBar } from "../components/NavBar";
import { ThemeProvider } from "../components/ThemeProvider";
import type { Layout } from "@/types";
import { Toaster } from "sonner";

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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <NavBar />
          <QuoteProvider>
            <main className="flex flex-1 flex-col p-4">{children}</main>
            <Toaster position="top-center" />
          </QuoteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
