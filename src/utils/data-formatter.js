import { quotes } from "@/quotes";

export const addedLikeCountQuotes = quotes.map((oldProps) => {
  return {
    ...oldProps,
    likeCount: 0,
    isLiked: false,
  };
});

// I understand that I need to update quote.js like above. If I need to modify quote.js file permanently I would use npm module called "fs".
