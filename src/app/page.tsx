"use client";
import { MainPage } from "@/components/MainPage";

import { useQuoteContext } from "./QuoteContext";

export default function Home() {
  const { currentQuote, handleNextQuote } = useQuoteContext();

  const { quote, author } = currentQuote;

  return (
    <MainPage
      quote={quote}
      author={author}
      onClick={handleNextQuote}
    ></MainPage>
  );
}
