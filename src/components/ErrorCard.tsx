import { AlertCircle } from "lucide-react"; // İkon kullanıyorsan (shadcn genelde lucide kullanır)

export function ErrorCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border-l-4 border-destructive rounded-lg p-4 shadow-md flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
      <div className="flex flex-col">
        <p className="text-slate-700 text-sm mt-1">{children}</p>
      </div>
    </div>
  );
}
