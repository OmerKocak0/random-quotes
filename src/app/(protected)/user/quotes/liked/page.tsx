"use client";

import { useQuoteContext } from "@/app/QuoteContext";
import { QuoteList } from "@/components/QuoteList";
import type { Quotes } from "@/types";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Loader2 } from "lucide-react";

export default function LikedQuotes() {
  const { quotesList } = useQuoteContext();
  const { user, isLoading } = useUser();
  const userData = user?.sub || user?.email;
  if (isLoading) {
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
    </div>;
  }
  if (!user || !userData) {
    return null;
  }

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
