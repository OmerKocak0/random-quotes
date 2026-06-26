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
import type { Quotes } from "@/types";
import type { QuoteContextType } from "@/types";
import { useUser } from "@auth0/nextjs-auth0/client";

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
  const { user } = useUser();
  function handleNextQuote() {
    let next = getRandomNumber(0, quotesList.length - 1);
    while (next === quoteIndex) {
      next = getRandomNumber(0, quotesList.length - 1);
    }
    setQuoteIndex(next);
  }

  function handleLike(clickedQuote: Quotes) {
    if (!user) {
      return;
    }
    const currentUserId = user.sub || user.email;
    if (!currentUserId) return;

    const newQuoteList = quotesList.map((item) => {
      if (item.quote === clickedQuote.quote) {
        const isAlreadyLiked = item.likedBy.includes(currentUserId);

        const newLikedBy = isAlreadyLiked
          ? item.likedBy.filter((id) => id !== currentUserId)
          : [...item.likedBy, currentUserId];

        return {
          ...item,
          likedBy: newLikedBy,
          likeCount: newLikedBy.length,
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
