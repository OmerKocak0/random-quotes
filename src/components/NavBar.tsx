"use client";
import { ThemeToggle } from "./ThemeToggle";
import { ListItem } from "./ListItem";
import { useUser } from "@auth0/nextjs-auth0/client";

const appRoutes = [
  {
    name: "Home",
    url: "/",
    protectedPage: false,
  },
  {
    name: "Liked Quotes",
    url: "/user/quotes/liked",
    protectedPage: true,
  },
];

export function NavBar() {
  const { user, isLoading } = useUser();

  if (isLoading) return null;

  return (
    <nav className="flex justify-between w-full sticky p-3 top-0 z-50 bg-slate-200/70  backdrop-blur-md border-b border-slate-300/50 dark:border-slate-800 dark:bg-slate-950/70 transition-colors duration-300">
      <ul className="flex gap-2 pt-2 pl-4 ">
        {appRoutes.map(({ name, url, protectedPage }) => {
          if (protectedPage && !user) return null;
          return (
            <ListItem key={name} href={url}>
              {name}
            </ListItem>
          );
        })}
        {!user ? (
          <ListItem href="/auth/login">Log In</ListItem>
        ) : (
          <ListItem href="/auth/logout">Log Out</ListItem>
        )}
      </ul>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
