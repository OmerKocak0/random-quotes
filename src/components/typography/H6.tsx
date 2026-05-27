import type { TypographyProps } from "./H3";

export function H6({ element, children }: TypographyProps) {
  switch (element) {
    case "p":
      return (
        <p className="text-md font-semibold text-slate-700 dark:text-white self-end">
          {children}
        </p>
      );
    case "span":
      return (
        <span className="text-md font-semibold text-slate-700 dark:text-white self-end">
          {children}
        </span>
      );
  }
}
