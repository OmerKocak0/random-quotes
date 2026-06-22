import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { useQuoteContext } from "@/app/QuoteContext";

export function LogInAlert() {
  const { isLoginAlertOpen, setIsLoginAlertOpen } = useQuoteContext();
  return (
    <AlertDialog open={isLoginAlertOpen} onOpenChange={setIsLoginAlertOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            You have to log in if you want to like quotes.
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <Link href={"/auth/login"}>Log In</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
