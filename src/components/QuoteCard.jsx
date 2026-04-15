export function QuoteCard({ children }) {
  return (
    <section className="p-10 bg-amber-100/50 shadow-md rounded-md  w-3xl min-h-74 flex flex-col justify-between">
      {children}
    </section>
  );
}
