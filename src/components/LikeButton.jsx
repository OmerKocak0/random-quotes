import { QuoteContext } from "@/app/QuoteContext";
import { Button } from "@/components/Button";
import { H6 } from "@/components/typography/H6";
import { useContext } from "react";
import redHeart from "../../public/redHeart.svg";
import emptyHeart from "../../public/emptyHeart.svg";

export default function LikeButton({ quoteData }) {
  const { currentQuote, handleLike } = useContext(QuoteContext);

  const targetQuote = quoteData || currentQuote;
  return (
    <div className="flex flex-1 items-center">
      <Button variant={"like"} onClick={() => handleLike(targetQuote)}>
        <img
          src={targetQuote.isLiked ? redHeart.src : emptyHeart.src}
          alt={targetQuote.isliked ? "Unlike Button" : " Like Button"}
        />
      </Button>
      <H6 element="likeCount">{targetQuote.likeCount}</H6>
    </div>
  );
}
