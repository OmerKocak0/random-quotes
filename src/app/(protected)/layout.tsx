import { auth0 } from "@/lib/auth0";
import type { Layout } from "@/types";
import { redirect, RedirectType } from "next/navigation";

export default async function ProtectedLayout({ children }: Layout) {
  const session = await auth0.getSession();

  if (!session) {
    return redirect("/auth/login", RedirectType.replace);
  }

  const { user, error, loading } = session;

  if (loading) {
    return <span>Page is loading</span>;
  }
  if (error) {
    return <span>An error occured</span>;
  }

  return user ? <>{children}</> : <></>;
}
