import Link from "next/link";
import type { ListItemTypes } from "@/types";

export function ListItem({ children, href }: ListItemTypes) {
  return (
    <li>
      <Link
        href={href}
        className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-slate-700  hover:text-slate-900 hover:bg-slate-300/50  dark:text-slate-100 dark:hover:bg-slate-800/50 dark:hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-600"
      >
        {children}
      </Link>
    </li>
  );
}
