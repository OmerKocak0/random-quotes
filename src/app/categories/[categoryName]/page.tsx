"use client";

import { useState, useMemo } from "react";
import { getRandomNumber } from "@/helperFunctions/math-random";
import { useQuoteContext } from "@/app/QuoteContext";
import { useParams } from "next/navigation";

import { MainPage } from "@/components/MainPage";
export default function CategoryPage() {
  const params = useParams();
  const currentCategory = params.categoryName as string;
  const { quotesList, handleLike } = useQuoteContext();
  const filteredQuotes = useMemo(() => {
    return quotesList.filter(
      (item) => item.category.toLowerCase() === currentCategory.toLowerCase(),
    );
  }, [quotesList, currentCategory]);
  const [localIndex, setLocalIndex] = useState(0);
  const currentLocalQuote = filteredQuotes[localIndex] ?? filteredQuotes[0];
  if (!currentLocalQuote) {
    throw new Error("QuoteProvider requires at least one quote");
  }
  function handleNextCategorizedQuote() {
    let next = getRandomNumber(0, filteredQuotes.length - 1);
    while (next === localIndex) {
      next = getRandomNumber(0, filteredQuotes.length - 1);
    }
    setLocalIndex(next);
  }
  const { quote, author } = currentLocalQuote;

  return (
    <MainPage
      quote={quote}
      author={author}
      onClick={handleNextCategorizedQuote}
    ></MainPage>
  );
}
