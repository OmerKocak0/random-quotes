import type { Button } from "@/types";
import Image from "next/image";
export function MyButton({
  variant,
  onClick,
  children,
  ariaLabel,
  bgImage,
}: Button) {
  let buttonStyles = "";
  switch (variant) {
    case "primary":
      buttonStyles =
        "bg-slate-400/90 text-slate-900  bg-slate-300/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200";
      break;
    case "secondary":
      buttonStyles = "flex justify-end w-16 ";
      break;
    case "tertiary":
      buttonStyles =
        "flex p-4 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200  items-center";
      break;
    case "big-button":
      buttonStyles =
        "w-full min-h-[26rem] mx-4 text-2xl md:text-3xl flex items-center justify-center text-white drop-shadow-md transition-transform duration-300 overflow-hidden relative";
      break;
    default:
      buttonStyles = "bg-slate-400/90 text-slate-900 ";
  }

  return (
    <button
      className={`group overflow-hidden text-md font-semibold py-2 px-4 rounded-md cursor-pointer ${buttonStyles}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {bgImage && (
        <Image
          src={bgImage}
          alt={ariaLabel || "Background"}
          fill
          className="object-cover z-0"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
      {bgImage && variant === "big-button" && (
        <div className="absolute inset-0 z-1 bg-blue-950/70 group-hover:bg-blue-900/50 transition-colors duration-300"></div>
      )}

      <span className="relative z-10 drop-shadow-xl tracking-wide">
        {children}
      </span>
    </button>
  );
}
