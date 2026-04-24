export function H6({ element, children }) {
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
    case "likeCount":
      return (
        <span className="text-md font-semibold text-slate-700 dark:text-white">
          {children}
        </span>
      );
    case "nav":
      return (
        <span className="text-md font-semibold text-slate-700 dark:text-white">
          {children}
        </span>
      );
  }
}
