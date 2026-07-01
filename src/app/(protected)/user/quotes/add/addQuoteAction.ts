"use server";

import { auth0 } from "@/lib/auth0";
import type { AddNewQuoteState } from "@/types";
import { NewQuoteSchema } from "@/types";
import z from "zod";
import { Collections, getDb } from "@/lib/db";

export async function addNewQuote(
  _currentState: AddNewQuoteState,
  formData: FormData,
): Promise<AddNewQuoteState> {
  const session = await auth0.getSession();
  const user = session?.user;

  if (!session || !user) {
    return {
      success: false,
      message: "You must log in before add quote.",
    };
  }

  const rawData = {
    quote: String(formData.get("quote") ?? ""),
    author: String(formData.get("author") ?? ""),
    category: String(formData.get("category") ?? ""),
  };

  const validationOutput = NewQuoteSchema.safeParse(rawData);

  if (!validationOutput.success) {
    const validationErrors = z.flattenError(validationOutput.error); // z.treeify is the new one but it causes errors.
    console.log("validationErrors", validationErrors);
    return {
      success: false,
      errors: validationErrors,
      data: rawData,
    };
  } else {
    const db = await getDb();
    const col = db.collection(Collections.quotes);
    const now = new Date();

    const newQuote = {
      quote: validationOutput.data.quote,
      author: validationOutput.data.author,
      category: validationOutput.data.category,
      approvedByAdmin: false,
      createdBy: user.sub,
      createdAt: now,
      updatedAt: now,
    };
    await col.insertOne(newQuote);

    return { success: true };
  }
}
