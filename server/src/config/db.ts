import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully to Neon PostgreSQL");
  } catch (error) {
    console.error(
      "❌ Error while trying to connect to the database:",
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  }
};

export default prisma;
