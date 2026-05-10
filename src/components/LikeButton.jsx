import { QuoteContext } from "@/app/QuoteContext";
import { Button } from "@/components/Button";
import { H6 } from "@/components/typography/H6";
import { useContext } from "react";
import Image from "next/image";
import redHeart from "../../public/redHeart.svg";
import emptyHeart from "../../public/emptyHeart.svg";

export default function LikeButton({ quoteData }) {
  const { currentQuote, handleLike } = useContext(QuoteContext);

  const targetQuote = quoteData || currentQuote;
  return (
    <div className="flex flex-1 items-center">
      <Button variant={"secondary"} onClick={() => handleLike(targetQuote)}>
        <Image
          src={targetQuote.isLiked ? redHeart.src : emptyHeart.src}
          alt={targetQuote.isliked ? "Unlike Button" : " Like Button"}
          width={24}
          height={24}
        />
      </Button>
      <H6 element="span">{targetQuote.likeCount}</H6>
    </div>
  );
}
