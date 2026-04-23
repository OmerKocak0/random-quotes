"use client";

import { Button } from "@/components/Button";
import { Children, useState, useContext } from "react";

import { H3 } from "@/components/typography/H3";
import { H6 } from "@/components/typography/H6";
import { QuoteCard } from "@/components/QuoteCard";
import LikeButton from "@/components/LikeButton";

import { QuoteContext } from "./QuoteContext";

export default function Home() {
  const { currentQuote, handleClick, handleLike } = useContext(QuoteContext);

  const { quote, author, likeCount, dislikeCount } = currentQuote;

  return (
    <main className="min-h-[calc(100vh-70px)] flex items-center justify-center bg-slate-200 overflow-hidden">
      <QuoteCard>
        <H3 element="p">{quote}</H3>
        <H6 element="span">-{author}</H6>

        <LikeButton />
        <div className="mt-6 flex flex-col">
          <Button variant={"primary"} onClick={handleClick}>
            Next Quote
          </Button>
        </div>
      </QuoteCard>
    </main>
  );
}
