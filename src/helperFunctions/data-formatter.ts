import { quotes } from "@/quotes";

export const addedLikeCountQuotes = quotes.map((oldProps) => {
  return {
    ...oldProps,
    likeCount: 0,
    likedBy: [] as string[],
  };
});
