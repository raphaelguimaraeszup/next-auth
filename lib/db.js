import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://raphael:pg1HHAEiaqqMA3lR@cluster0.zjgga.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
