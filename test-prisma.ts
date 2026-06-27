import { PrismaClient } from "./prisma/src/generated/prisma/client";
const prisma = new PrismaClient({} as any);
console.log("Prisma created successfully");
