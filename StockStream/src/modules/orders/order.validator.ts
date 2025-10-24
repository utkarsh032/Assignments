import { z } from "zod";

export const createOrderSchema = z.object({
  symbol: z.string().min(1),
  side: z.enum(["buy", "sell"]),
  qty: z.number().positive(),
  clientOrderId: z.string().optional(),
});
