import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export interface BasicDataQuotes {
  quote: string;
  author: string;
  category: string;
}
export interface Quotes extends BasicDataQuotes {
  likedBy: string[];
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
  isLoginAlertOpen: boolean;
  setIsLoginAlertOpen(open: boolean): void;
}

export interface TypographyProps {
  element: "p" | "span" | "h3";
  children: ReactNode;
}

export interface Button {
  variant: "primary" | "secondary" | "tertiary" | "big-button";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  ariaLabel?: string;
  bgImage?: StaticImageData;
}

export interface ListItemTypes {
  children: React.ReactNode;
  href: string;
}

export type AddNewQuoteState = {
  success: boolean;
  errors?: {
    formErrors: string[];
    fieldErrors: {
      author?: string[];
      quote?: string[];
      [key: string]: string[] | undefined;
    };
  };
  message?: string;
  data?: {
    author: string;
    quote: string;
    category: string;
  };
};

export interface LogoutDialogProps {
  children: ReactNode;
}
