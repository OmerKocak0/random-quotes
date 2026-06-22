"use client";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ErrorCard } from "@/components/ErrorCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button as Button2 } from "@/components/ui/button";
import { useActionState } from "react";
import { addNewQuote } from "./addQuoteAction";
import type { AddNewQuoteState } from "@/types";
import { redirect } from "next/navigation";

const initialAddNewQuote: AddNewQuoteState = {
  success: false,
};

export default function AddNewQuotePage() {
  const [state, dispatchAction, isPending] = useActionState(
    addNewQuote,
    initialAddNewQuote,
  );

  if (isPending) return <p>Loading...</p>;
  if (state.success) return redirect("/user/quotes/create/success");
  return (
    <form
      action={dispatchAction}
      className="flex flex-1 justify-center items-center"
    >
      <FieldSet className="w-full max-w-150">
        <FieldLegend className="text-center w-full text-2xl!">
          Add a Quote
        </FieldLegend>
        <FieldGroup className="pr-4">
          <Field>
            <FieldLabel htmlFor="quote" className="text-xl">
              Quote
            </FieldLabel>
            <Textarea
              id="quote"
              name="quote"
              placeholder="The Quote which you want to write"
              className="p-2"
              required
              minLength={5}
              maxLength={300}
              defaultValue={state?.data?.quote}
            />
          </Field>
          {state?.errors?.fieldErrors?.quote && (
            <ErrorCard>{state.errors.fieldErrors.quote[0]}</ErrorCard>
          )}
        </FieldGroup>
        <FieldGroup className="flex flex-row">
          <Field className=" max-w-sm">
            <FieldLabel htmlFor="author" className="text-xl">
              Author
            </FieldLabel>
            <Input
              id="author"
              name="author"
              type="text"
              placeholder="Quote's Author"
              required
              minLength={2}
              maxLength={50}
              defaultValue={state?.data?.author}
            />
          </Field>
          {state?.errors?.fieldErrors?.author && (
            <ErrorCard>{state.errors.fieldErrors.author.join(".")}</ErrorCard>
          )}
          <div className="flex items-end">
            <Select>
              <SelectTrigger className="w-45">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="motivation">Motivation</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="philosophy">Philosophy</SelectItem>
                  <SelectItem value="life">Life</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </FieldGroup>
        <FieldGroup className="flex flex-row">
          <Button2 type="submit">Add</Button2>
          <Button2 variant="outline">Clear</Button2>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
