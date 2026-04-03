import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dns from "node:dns";

const seedAdmin = async (): Promise<void> => {
  const mongoDnsServers = process.env.MONGO_DNS_SERVERS;
  if (mongoDnsServers) {
    dns.setServers(
      mongoDnsServers
        .split(",")
        .map((server) => server.trim())
        .filter(Boolean),
    );
  }

  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is missing in environment variables");
  }

  await mongoose.connect(uri);

  const passwordHash = await bcrypt.hash("admin123", 10);

  const result = await mongoose.connection.collection("users").updateOne(
    { email: "admin@gmail.com" },
    {
      $set: {
        email: "admin@gmail.com",
        password: passwordHash,
      },
    },
    { upsert: true },
  );

  console.log(
    JSON.stringify({
      matched: result.matchedCount,
      modified: result.modifiedCount,
      upserted: result.upsertedCount,
    }),
  );

  await mongoose.disconnect();
};

seedAdmin().catch(async (error) => {
  console.error("Failed to seed admin user:", error);
  await mongoose.disconnect();
  process.exit(1);
});
