import HomeContent from "../models/HomeContent.model";
import BuyService from "../models/BuyService.model";
import type { IHomeContent } from "../models/HomeContent.model";
import type { IBuyService } from "../models/BuyService.model";

// Fetch the homepage content from MongoDB
export async function getHomeContent(): Promise<IHomeContent | null> {
  return HomeContent.findOne({}).lean();
}

// Save (or update) the homepage content
// Uses "upsert" = insert if no document exists, update if one already exists
// $set means "only update the fields we provide, leave others alone"
export async function saveHomeContent(
  data: Partial<IHomeContent>,
): Promise<IHomeContent> {
  const doc = await HomeContent.findOneAndUpdate(
    {}, // match the one singleton document
    { $set: data }, // only update provided fields
    { upsert: true, new: true, setDefaultsOnInsert: true }, // create if missing, return updated doc
  );
  if (!doc) throw new Error("Failed to save home content");
  return doc.toObject();
}

// Fetch buy service content
export async function getBuyServiceContent(): Promise<IBuyService | null> {
  return BuyService.findOne({}).lean();
}

// Save (or update) buy service content
export async function saveBuyServiceContent(
  data: Partial<IBuyService>,
): Promise<IBuyService> {
  const doc = await BuyService.findOneAndUpdate(
    {},
    { $set: data },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );
  if (!doc) throw new Error("Failed to save buy service content");
  return doc.toObject();
}
