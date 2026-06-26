"use client";

import { useQuoteContext } from "@/app/QuoteContext";
import { QuoteCard } from "@/app/(protected)/user/quotes/_components/QuoteCard";
import { QuoteList } from "@/app/(protected)/user/quotes/_components/QuoteList";
import type { Quotes } from "@/types";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function LikedQuotes() {
  const { quotesList } = useQuoteContext();
  const { user } = useUser();
  const userData = user?.sub || user?.email;

  if (user) {
    if (userData) {
      const likedQuotesArray = quotesList.filter((item: Quotes) =>
        item.likedBy.includes(userData),
      );

      return (
        <main className="flex-1 flex flex-col items-center justify-center overflow-hidden">
          <h1 className="text-3xl font-bold p-4">Liked Quotes</h1>
          <QuoteList
            quotes={likedQuotesArray}
            emptyMessage="There is empty. It's empty here. Your liked quotes will appear here"
          />
        </main>
      );
    }
  } else {
    return (
      <QuoteCard>
        <p>Please Log In first</p>
      </QuoteCard>
    );
  }
}
