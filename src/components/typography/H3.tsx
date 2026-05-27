import type { ReactNode } from "react";

export interface TypographyProps {
  element: "p" | "span" | "h3";
  children: ReactNode;
}

export function H3({ element, children }: TypographyProps) {
  switch (element) {
    case "p":
      return (
        <p className="text-2xl font-semibold text-slate-900 dark:text-white min-h-16">
          {children}
        </p>
      );

    case "span":
      return (
        <span className="text-2xl font-semibold text-slate-900 dark:text-white">
          {children}
        </span>
      );
    case "h3":
      return (
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {children}
        </h3>
      );
  }
}
