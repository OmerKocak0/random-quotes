"use client";

import { useQuoteContext } from "@/app/QuoteContext";
import { QuoteList } from "../components/QuoteList";
import type { Quotes } from "@/types";
import { useUser } from "@auth0/nextjs-auth0";

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
        <main className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center bg-slate-200 dark:bg-linear-to-br dark:from-slate-900 dark:to-slate-950 overflow-hidden">
          <h1 className="text-3xl font-bold pt-2">Liked Quotes</h1>
          <QuoteList
            quotes={likedQuotesArray}
            emptyMessage="There is empty. It's empty here. Your liked quotes will appear here"
          />
        </main>
      );
    }
  }
}
