"use client";

import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  type ReactElement,
} from "react";
import { addedLikeCountQuotes as initialQuotes } from "@/utils/data-formatter";
import { getRandomNumber } from "@/utils/helper-function";
import type { Item } from "@/types";
import type { QuoteContextType } from "@/types";

export const QuoteContext = createContext<QuoteContextType | null>(null);

export function useQuoteContext() {
  const context = useContext(QuoteContext);
  if (!context)
    throw new Error("useQuoteContext must be used within QuoteProvider");
  return context;
}

export const QuoteProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quotesList, setQuotesList] = useState(initialQuotes);

  /* I use '!' operator because currentQuote which in QuoteContext.Provider is giving error and Typescript can't be sure that currentQuote's length more than 0. 
   I make it sure that this array always have 1 element at least */
  const currentQuote = quotesList[quoteIndex] ?? quotesList[0]!;

  function handleNextQuote() {
    let next = getRandomNumber(0, quotesList.length - 1);
    while (next === quoteIndex) {
      next = getRandomNumber(0, quotesList.length - 1);
    }
    setQuoteIndex(next);
  }

  function handleLike(clickedQuote: Item) {
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
