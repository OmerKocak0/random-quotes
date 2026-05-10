"use client";

import { useContext } from "react";
import { QuoteContext } from "@/app/QuoteContext";
import { QuoteList } from "../components/QuoteList";

export default function LikedQuotes() {
  const { quotesList } = useContext(QuoteContext);
  const likedQuotes = quotesList.filter((item) => item.isLiked === true);

  return (
    <main className="min-h-[calc(100vh-70px)] flex flex-col items-center p-10 bg-slate-200">
      <h1 className="text-3xl font-bold">Liked Quotes</h1>
      <QuoteList
        quotes={likedQuotes}
        emptyMessage="There is empty. It's empty here. Your liked quotes will appear here"
      />
    </main>
  );
}
