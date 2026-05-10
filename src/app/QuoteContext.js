"use client";

import { createContext, useState } from "react";
import { addedLikeCountQuotes as initialQuotes } from "@/utils/data-formatter";
import { getRandomNumber } from "@/utils/helper-function";

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quotesList, setQuotesList] = useState(initialQuotes);
  const currentQuote = quotesList[quoteIndex];

  function handleNextQuote() {
    let next = getRandomNumber(0, initialQuotes.length - 1);
    while (next === quoteIndex) {
      next = getRandomNumber(0, initialQuotes.length - 1);
    }
    setQuoteIndex(next);
  }
  // handleLike function updated because older version causes to unlike bug on the Liked Quotes page.
  function handleLike(clickedQuote) {
    const newQuoteList = quotesList.map((item) => {
      if (item.quote === clickedQuote.quote) {
        return {
          ...item,
          isLiked: !item.isLiked,
          likeCount: item.isLiked ? item.likeCount - 1 : item.likeCount + 1,
        };
      }
      return item;
    });

    setQuotesList(newQuoteList);
  }
  return (
    <QuoteContext.Provider
      value={{ currentQuote, handleNextQuote, handleLike, quotesList }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
// Note: handleClick is placed here to prevent structural complexity, as it shares the interconnected addedLikeCountQuotes state with the like/dislike logic.
