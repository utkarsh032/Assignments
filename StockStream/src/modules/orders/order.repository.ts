import prisma from "../../app/prisma";

export const orderRepo = {
  create: (data: any) => prisma.order.create({ data }),
  findByClientOrderId: (clientOrderId: string) =>
    prisma.order.findUnique({ where: { clientOrderId } }),
  getAll: (filters: any) =>
    prisma.order.findMany({
      where: filters,
      orderBy: { createdAt: "desc" },
    }),
};
