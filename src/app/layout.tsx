import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "./QuoteContext";
import { NavBar } from "../components/NavBar";
import { ThemeProvider } from "../components/ThemeProvider";

interface Layout {
  children: React.ReactNode;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Random Quotes Application",
  description: "Random Quotes Application 200825",
};

export default function RootLayout({ children }: Layout) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <NavBar />
          <QuoteProvider>{children}</QuoteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
