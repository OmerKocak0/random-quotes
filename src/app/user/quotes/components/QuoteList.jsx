import { H3 } from "@/components/typography/H3";
import { H6 } from "@/components/typography/H6";
import { QuoteCard } from "@/components/QuoteCard";
import LikeButton from "../../../../components/LikeButton";

export function QuoteList({ quotes, emptyMessage }) {
  if (quotes.length === 0) {
    return <H3 element={"p"}>{emptyMessage}</H3>;
  }
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mt-6">
      {quotes.map((item) => (
        <QuoteCard key={item.quote}>
          <H3 element="p">{item.quote}</H3>
          <H6 element="span">-{item.author}</H6>
          <LikeButton quoteData={item} />
        </QuoteCard>
      ))}
    </div>
  );
}
