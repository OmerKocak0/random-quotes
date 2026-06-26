import { auth0 } from "@/lib/auth0";
import type { Layout } from "@/types";
import { redirect, RedirectType } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Toaster } from "sonner";
export default async function ProtectedLayout({ children }: Layout) {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/auth/login", RedirectType.replace);
  }

  const { user, error, loading } = session;

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }
  if (error) {
    return redirect("/auth/login", RedirectType.replace);
  }

  return user ? (
    <>
      {children}
      <Toaster />
    </>
  ) : (
    <></>
  );
}
