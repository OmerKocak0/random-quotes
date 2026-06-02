import type { ReactNode } from "react";

export function QuoteCard({ children }: { children: ReactNode }) {
  return (
    <section className="w-full max-w-3xl p-6 md:p-10 bg-white dark:bg-slate-700/60 shadow-md rounded-xl min-h-64 md:min-h-74 flex flex-col justify-between transition-colors duration-300">
      {children}
    </section>
  );
}
