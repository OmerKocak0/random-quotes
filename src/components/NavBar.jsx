"use client";
import Link from "next/link";
import { H6 } from "./typography/H6";

export function NavBar() {
  return (
    <div className="  bg-amber-100/50 p-4  shadow-md rounded-b-2xl items-center">
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
    </div>
  );
}
