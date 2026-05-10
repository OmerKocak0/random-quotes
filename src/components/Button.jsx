export function Button({ variant, onClick, children }) {
  let buttonStyles = "";
  switch (variant) {
    case "primary":
      buttonStyles = "bg-slate-400/90 text-slate-900  bg-slate-300/90";
      break;
    case "secondary":
      buttonStyles = "flex justify-end w-16 ";
      break;
    case "tertiary":
      buttonStyles =
        "flex p-4 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200  items-center";

      break;

    default:
      buttonStyles = "bg-slate-400/90 text-slate-900";
  }

  return (
    <button
      className={`text-md font-semibold py-2 px-4 rounded-md ${buttonStyles} cursor-pointer `}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
