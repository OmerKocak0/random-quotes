"use client";
import Link from "next/link";
import { H6 } from "./typography/H6";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  return (
    <nav className="flex justify-between w-full sticky p-3 top-0 z-50 bg-slate-200/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-300/50 dark:border-slate-800 transition-colors duration-300">
      <ul className="flex gap-4 pt-2 pl-4 ">
        <li>
          <H6 element="nav">
            <Link href="/">Main Page</Link>
          </H6>
        </li>
        <li>
          <H6 element="nav">
            <Link href="/user/quotes/liked">Liked Quotes</Link>
          </H6>
        </li>
      </ul>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
