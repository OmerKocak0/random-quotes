import LikeButton from "./LikeButton";
import { MyButton } from "./MyButton";
import { QuoteCard } from "./QuoteCard";
import { H3 } from "./typography/H3";
import { H6 } from "./typography/H6";

export function MainPage({
  quote,
  author,
  category,
  onClick,
}: {
  quote: React.ReactNode;
  author: React.ReactNode;
  category?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <section className="flex-1 flex flex-col items-center justify-center overflow-hidden gap-6">
      {category && <H3 element="h3">{category}</H3>}
      <QuoteCard>
        <H3 element="p">{quote}</H3>
        <H6 element="span">-{author}</H6>

        <LikeButton />
        <div className="mt-6 flex flex-col">
          <MyButton
            variant={"primary"}
            onClick={onClick}
            ariaLabel="Next Quote Button"
          >
            Next Quote
          </MyButton>
        </div>
      </QuoteCard>
    </section>
  );
}
