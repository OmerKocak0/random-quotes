"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MyButton } from "./MyButton";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10"></div>;
  }

  return (
    <MyButton
      variant={"tertiary"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      ariaLabel={
        resolvedTheme === "dark" ? "ligth theme button" : "dark theme button"
      }
    >
      {resolvedTheme === "dark" ? (
        <span className="text-xl leading-none ">☀️</span>
      ) : (
        <span className="text-xl leading-none">🌙</span>
      )}
    </MyButton>
  );
}
