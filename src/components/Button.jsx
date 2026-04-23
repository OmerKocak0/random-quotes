export function Button({ variant, onClick, children }) {
  let buttonStyles = "";
  switch (variant) {
    case "primary":
      buttonStyles = "bg-slate-400/90 text-slate-900  bg-slate-300/90";
      break;
    case "secondary":
      buttonStyles = "flex justify-end w-16 ";
      break;
    default:
      buttonStyles = "bg-slate-400/90 text-slate-900";
  }

  return (
    <button
      className={`text-md font-semibold py-2 px-4 rounded-md ${buttonStyles} cursor-pointer `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
