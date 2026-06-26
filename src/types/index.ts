import type { ReactNode } from "react";

export interface BasicDataQuotes {
  quote: string;
  author: string;
}
export interface Quotes extends BasicDataQuotes {
  likedBy: string[];
  likeCount: number;
}

export interface LikeButtonProps {
  quoteData?: Quotes;
}

export interface List {
  quotes: Quotes[];
  emptyMessage: string;
}

export interface Layout {
  children: React.ReactNode;
}

export interface QuoteContextType {
  currentQuote: Quotes;
  quotesList: Quotes[];
  handleNextQuote: () => void;
  handleLike: (quote: Quotes) => void;
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

export interface ListItemTypes {
  children: React.ReactNode;
  href: string;
}
