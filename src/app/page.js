"use client";

import { Button } from "@/components/Button";
import { Children, useState } from "react";
import { getRandomNumber } from "@/utils/helper-function";
import { H3 } from "@/components/typography/H3";
import { H6 } from "@/components/typography/H6";
import { QuoteCard } from "@/components/QuoteCard";
import heartLogo from "../../public/heartLogo.svg";
import { addedLikeCountQuotes as initialQuotes } from "@/utils/data-formatter";

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const { quote, author } = initialQuotes[quoteIndex];

  function handleClick() {
    // I added -1 because I get an Out Of Bounds error
    let next = getRandomNumber(0, initialQuotes.length - 1);
    while (next === quoteIndex) {
      next = getRandomNumber(0, initialQuotes.length - 1);
    }
    setQuoteIndex(next);
  }
  const [quotesList, setQuotesList] = useState(initialQuotes);
  const currentQuote = quotesList[quoteIndex];

  function handleLike() {
    const newQuoteList = [...quotesList];
    newQuoteList[quoteIndex] = {
      ...newQuoteList[quoteIndex],
      likeCount: newQuoteList[quoteIndex].likeCount + 1,
    };
    setQuotesList(newQuoteList);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-200 ">
      <QuoteCard>
        <H3 element="p">{quote}</H3>
        <H6 element="span">-{author}</H6>
        <div className="flex flex-1 items-center">
          <Button variant={"like"} onClick={handleLike}>
            <img src={heartLogo.src} alt="Heart Logo" />
          </Button>
          <H6 element="likeCount">{currentQuote.likeCount}</H6>
        </div>

        <div className="mt-6 flex flex-col">
          <Button variant={"primary"} onClick={handleClick}>
            Next Quote
          </Button>
        </div>
      </QuoteCard>
    </main>
  );
}
