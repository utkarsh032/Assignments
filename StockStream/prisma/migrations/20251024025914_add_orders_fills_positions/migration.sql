-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "clientOrderId" TEXT,
    "symbol" TEXT NOT NULL,
    "side" TEXT NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "avgPrice" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fill" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL,
    "avgCost" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_clientOrderId_key" ON "Order"("clientOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "Position_symbol_key" ON "Position"("symbol");

-- AddForeignKey
ALTER TABLE "Fill" ADD CONSTRAINT "Fill_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
