import type { ReactNode } from "react";

export interface Item {
  quote: string;
  author: string;
  isLiked?: boolean;
  likeCount: number;
}

export interface LikeButtonProps {
  quoteData?: Item;
}

export interface List {
  quotes: Item[];
  emptyMessage: string;
}

export interface Layout {
  children: React.ReactNode;
}

export interface QuoteContextType {
  currentQuote: Item;
  quotesList: Item[];
  handleNextQuote: () => void;
  handleLike: (quote: Item) => void;
}

export interface TypographyProps {
  element: "p" | "span" | "h3";
  children: ReactNode;
}

export interface Button {
  variant: "primary" | "secondary" | "tertiary";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  ariaLabel?: string;
}
