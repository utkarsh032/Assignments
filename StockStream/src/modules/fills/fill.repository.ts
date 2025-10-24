import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class FillRepository {
  async createFill (data: {
    orderId: string;
    price: number;
    qty: number;
    timestamp: Date;
  }) {
    return prisma.fill.create({ data });
  }

  async getFillsByOrderId (orderId: string) {
    return prisma.fill.findMany({ where: { orderId } });
  }

  async getAllFills () {
    return prisma.fill.findMany();
  }
}
