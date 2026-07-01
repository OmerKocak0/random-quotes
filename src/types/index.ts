import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import z from "zod";

//Quotes Types

export const NewQuoteSchema = z.object({
  author: z
    .string()
    .trim()
    .min(2, { message: "Author name must be 2 character at least." })
    .max(50, {
      message:
        "Maximum character limit is 300 for author name. Try write shorter if could write.",
    }),

  quote: z
    .string()
    .trim()
    .min(5, { message: "Quotes must be 5 character at least." })
    .max(300, {
      message: "Maximum character limit is 300 for quotes. Try another one",
    }),
  category: z.string().min(1, { message: "Please choose 1 category." }),
});
export interface BasicDataQuotes {
  quote: string;
  author: string;
  category: string;
}
export interface Quotes extends BasicDataQuotes {
  likedBy: string[];
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

export type NewQuoteInput = {};

//Components Types

export interface TypographyProps {
  element: "p" | "span" | "h3";
  children: ReactNode;
  buttonStyles?: string;
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

export interface LogoutDialogProps {
  children: ReactNode;
}

export interface LikeButtonProps {
  quoteData?: Quotes;
}

// Logical Types
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
