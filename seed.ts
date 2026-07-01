import { MongoClient } from "mongodb";
import { Collections } from "@/lib/db";
import { quotes } from "./quotes";

const uri = process.env.MONGODB_URI;
const name = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("URI cannot found. Check .env");
}

if (!name) {
  throw new Error("DB cannot found please check the .env");
}

const client = new MongoClient(uri);
async function Seeding() {
  try {
    await client.connect();
    const db = client.db();
    const col = db.collection(Collections.quotes);

    const enrichment = quotes.map((data) => ({
      ...data,
      approvedByAdmin: true,
      createdBy: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await col.insertMany(enrichment);
    console.log("Completed.");
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
}

Seeding();
