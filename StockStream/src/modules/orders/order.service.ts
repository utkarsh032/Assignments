import { AppError } from "../../core/errors/AppError";
import { orderRepo } from "./order.repository";
import { createOrderSchema } from "./order.validator";

export const orderService = {
  createOrder: async (payload: any) => {
    const parsed = createOrderSchema.parse(payload);

    if (parsed.clientOrderId) {
      const existing = await orderRepo.findByClientOrderId(
        parsed.clientOrderId
      );
      if (existing) {
        if (
          existing.symbol === parsed.symbol &&
          existing.side === parsed.side &&
          existing.qty === parsed.qty
        ) {
          return existing; // idempotent success
        } else {
          throw new AppError(
            409,
            "Conflict: clientOrderId with different payload"
          );
        }
      }
    }

    const order = await orderRepo.create(parsed);
    return order;
  },

  listOrders: async (filters: any) => {
    return orderRepo.getAll(filters);
  },
};
