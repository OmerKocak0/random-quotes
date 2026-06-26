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
import { Button } from "@/components/ui/button";
import { startTransition, useActionState, useEffect } from "react";
import { addNewQuote } from "./addQuoteAction";
import {
  NewQuoteSchema,
  type AddNewQuoteState,
  type BasicDataQuotes,
} from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const initialAddNewQuote: AddNewQuoteState = {
  success: false,
};

export default function AddNewQuotePage() {
  const router = useRouter();
  const [state, dispatchAction, isPending] = useActionState(
    addNewQuote,
    initialAddNewQuote,
  );

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    control,
    formState: { errors: clientSideErrors },
  } = useForm<BasicDataQuotes>({
    mode: "onBlur",
    resolver: zodResolver(NewQuoteSchema),
    defaultValues: {
      author: "",
      quote: "",
      category: "",
    },
  });
  useEffect(() => {
    if (state.errors) {
      toast.error("Failed to added quote. Please try again.", {
        id: "add-quote-toast",
      });
    }
    if (state.success) {
      toast.success("The quote added. Thank you for your contributions.", {
        id: "add-quote-toast",
      });
      router.push("/");
    }
  }, [state]);

  return (
    <form
      noValidate
      onReset={() =>
        reset({ author: "", quote: "", category: "" }, { keepErrors: false })
      }
      onSubmit={handleSubmit((data) => {
        toast.loading("Quote is being added. Wait a minute.", {
          id: "add-quote-toast",
        });
        const formData = new FormData();
        formData.append("author", data.author);
        formData.append("quote", data.quote);
        formData.append("category", data.category);
        startTransition(() => {
          dispatchAction(formData);
        });
      })}
      className="flex flex-1 justify-center items-center"
      id="addQuote"
      name="addQuote"
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
              placeholder="The Quote which you want to write"
              className="p-2"
              {...register("quote")}
            />
          </Field>
          {
            //client side error message
          }
          {clientSideErrors.quote && (
            <ErrorCard>{clientSideErrors.quote.message}</ErrorCard>
          )}
          {
            //server side error message
            //Also added index number in fieldErrors because it is an array and we don't want to shot every element of array. It could be heavy.
          }
          {state?.errors?.fieldErrors?.quote && (
            <ErrorCard>{state.errors.fieldErrors.quote[0]}</ErrorCard>
          )}
        </FieldGroup>
        <div>
          <FieldGroup className="flex flex-col sm:flex-row gap-6 w-full mt-4 items-start lg:min-h-38">
            <Field className=" max-w-sm">
              <FieldLabel htmlFor="author" className="text-xl">
                Author
              </FieldLabel>
              <Input
                id="author"
                type="text"
                placeholder="Quote's Author"
                {...register("author")}
              />

              {clientSideErrors.author && (
                <ErrorCard>{clientSideErrors.author.message}</ErrorCard>
              )}
              {state?.errors?.fieldErrors?.author && (
                <ErrorCard>{state.errors.fieldErrors.author[0]}</ErrorCard>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="category" className="text-xl">
                Category
              </FieldLabel>
              {
                //I can't
              }
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    name={field.name}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger id="category" className="w-45">
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
                )}
              />
              {clientSideErrors.category && (
                <ErrorCard>{clientSideErrors.category.message}</ErrorCard>
              )}
              {state?.errors?.fieldErrors?.category && (
                <ErrorCard>{state.errors.fieldErrors.category}</ErrorCard>
              )}
            </Field>
          </FieldGroup>
        </div>
        <FieldGroup className="flex flex-row ">
          <Button className="flex-1" type="submit" disabled={isPending}>
            Add
          </Button>
          <Button
            className="flex-1"
            variant="outline"
            type="button"
            onClick={() => {
              setValue("author", "");
              setValue("quote", "");
              setValue("category", "");
              clearErrors();
            }}
          >
            Clear
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}

// TODO: Change the clear button activity its so bold.
