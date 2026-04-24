"use client";

import { useContext } from "react";
import { QuoteContext } from "@/app/QuoteContext";
import { QuoteList } from "../components/QuoteList";

export default function LikedQuotes() {
  const { quotesList } = useContext(QuoteContext);
  const likedQuotes = quotesList.filter((item) => item.isLiked === true);

  return (
    <main className="min-h-[calc(100vh-70px)] w-full flex flex-col items-center p-4 md:p-10 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
        Liked Quotes
      </h1>
      <div>
        <QuoteList
          quotes={likedQuotes}
          emptyMessage="There is empty.It's empty here. Your liked quotes will appear here"
        />
      </div>
    </main>
  );
}
