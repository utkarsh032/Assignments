import { z } from "zod";

export const stockSchema = z.object({
  symbol: z.string().min(1, "Symbol is required"),
  companyName: z.string().min(1, "Company name is required"),
  price: z.number().positive("Price must be positive"),
});
