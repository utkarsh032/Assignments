import { FillRepository } from "./fill.repository";

const fillRepo = new FillRepository();

export class FillService {
  async createFill (orderId: string, price: number, qty: number) {
    return fillRepo.createFill({
      orderId,
      price,
      qty,
      timestamp: new Date(),
    });
  }

  async getFillsByOrder (orderId: string) {
    return fillRepo.getFillsByOrderId(orderId);
  }

  async getAllFills () {
    return fillRepo.getAllFills();
  }
}
