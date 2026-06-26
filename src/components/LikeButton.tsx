"use client";
import { useQuoteContext } from "@/app/QuoteContext";
import { Button } from "@/components/MyButton";
import { H6 } from "@/components/typography/H6";
import Image from "next/image";
import redHeart from "../../public/redHeart.svg";
import emptyHeart from "../../public/emptyHeart.svg";
import type { LikeButtonProps } from "@/types";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function LikeButton({ quoteData }: LikeButtonProps) {
  const { currentQuote, handleLike } = useQuoteContext();
  const { user } = useUser();
  const targetQuote = quoteData ?? currentQuote;

  const userId = user?.sub || user?.email || "";
  const likedByUser = !!user && targetQuote.likedBy.includes(userId);

  return (
    <div className="flex flex-1 items-center">
      <Button
        variant={"secondary"}
        onClick={() => handleLike(targetQuote)}
        ariaLabel={"like button"}
      >
        <Image
          src={likedByUser ? redHeart : emptyHeart}
          alt={likedByUser ? "Unlike Button" : "Like Button"}
          width={24}
          height={24}
          className={!likedByUser ? "dark:invert" : ""}
        />
      </Button>
      <div className="flex items-center">
        <H6 element="span">{targetQuote.likeCount}</H6>
      </div>
    </div>
  );
}
