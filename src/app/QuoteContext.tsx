"use client";

import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  type ReactElement,
} from "react";
import { addedLikeCountQuotes as initialQuotes } from "@/helperFunctions/data-formatter";
import { getRandomNumber } from "@/helperFunctions/math-random";
import type { Quotes } from "@/types";
import type { QuoteContextType } from "@/types";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LogInAlert } from "@/components/LogInAlert";
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
  const currentQuote = quotesList[quoteIndex] ?? quotesList[0];
  if (!currentQuote) {
    throw new Error("QuoteProvider requires at least one quote");
  }
  const { user } = useUser();
  function handleNextQuote() {
    let next = getRandomNumber(0, quotesList.length - 1);
    while (next === quoteIndex) {
      next = getRandomNumber(0, quotesList.length - 1);
    }
    setQuoteIndex(next);
  }
  const [isLoginAlertOpen, setIsLoginAlertOpen] = useState(false);

  function handleLike(clickedQuote: Quotes) {
    if (!user) {
      setIsLoginAlertOpen(true);
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
      value={{
        currentQuote,
        handleNextQuote,
        handleLike,
        quotesList,
        isLoginAlertOpen,
        setIsLoginAlertOpen,
      }}
    >
      {children}
      {<LogInAlert />}
    </QuoteContext.Provider>
  );
};
