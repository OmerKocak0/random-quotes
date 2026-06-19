"use client";

import { Button } from "@/components/MyButton";
import { H3 } from "@/components/typography/H3";
import { H6 } from "@/components/typography/H6";
import { QuoteCard } from "@/app/(protected)/user/quotes/_components/QuoteCard";
import LikeButton from "@/components/LikeButton";
import { useQuoteContext } from "./QuoteContext";

export default function Home() {
  const { currentQuote, handleNextQuote } = useQuoteContext();

  const { quote, author } = currentQuote;

  return (
    <main className="flex-1 flex flex-col items-center justify-center overflow-hidden">
      <QuoteCard>
        <H3 element="p">{quote}</H3>
        <H6 element="span">-{author}</H6>

        <LikeButton />
        <div className="mt-6 flex flex-col">
          <Button
            variant={"primary"}
            onClick={handleNextQuote}
            ariaLabel="Next Quote Button"
          >
            Next Quote
          </Button>
        </div>
      </QuoteCard>
    </main>
  );
}
