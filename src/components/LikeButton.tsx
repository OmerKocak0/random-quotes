import { QuoteContext } from "@/app/QuoteContext";
import { Button } from "@/components/Button";
import { H6 } from "@/components/typography/H6";
import { useContext } from "react";
import Image from "next/image";
import redHeart from "../../public/redHeart.svg";
import emptyHeart from "@/emptyHeart.svg";
import type { Item } from "@/app/user/quotes/liked/page";

interface LikeButtonProps {
  quoteData?: Item;
}

export default function LikeButton({ quoteData }: LikeButtonProps) {
  const { currentQuote, handleLike } = useContext(QuoteContext);

  const targetQuote = quoteData ?? currentQuote;
  return (
    <div className="flex flex-1 items-center">
      <Button
        variant={"secondary"}
        onClick={() => handleLike(targetQuote)}
        ariaLabel={"like button"}
      >
        <Image
          src={targetQuote.isLiked ? redHeart : emptyHeart}
          alt={targetQuote.isLiked ? "Unlike Button" : "Like Button"}
          width={24}
          height={24}
          className={!targetQuote.isLiked ? "dark:invert" : ""}
        />
      </Button>
      <H6 element="span">{targetQuote.likeCount}</H6>
    </div>
  );
}
