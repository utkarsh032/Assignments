# StckkStream API

A robust backend trading system built with Node.js, TypeScript, and Prisma that handles stock management, order processing, trade fills, and portfolio tracking.

## 🏗️ Project Structure

```
StckkStream /
│
├── src/
│   ├── app/              # Server setup and configuration
│   ├── core/             # Core utilities
│   │   ├── db/           # Database connection & utilities
│   │   ├── errors/       # Custom error handlers
│   │   ├── logging/      # Logging configuration
│   │   └── utils/        # Helper functions
│   ├── modules/
│   │   ├── orders/       # Order management
│   │   ├── fills/        # Trade fill processing
│   │   ├── portfolio/    # Portfolio aggregation
│   │   ├── quotes/       # Stock quotes
│   │   └── events/       # Domain events
│   └── tests/            # Test suites
│
├── prisma/               # Database schema & migrations
├── .env                  # Environment variables
├── Dockerfile
├── docker-compose.yml
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- PostgreSQL (or use Docker)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start the server
npm run dev
```

The server will start at `http://localhost:5000`

---

## 📚 API Documentation

### Base URL

```
http://localhost:5000
```

---

## 📋 All API Endpoints

### Stocks

| Method   | Endpoint          | Description        |
| -------- | ----------------- | ------------------ |
| `POST`   | `/api/stocks`     | Create a new stock |
| `GET`    | `/api/stocks`     | Get all stocks     |
| `PUT`    | `/api/stocks/:id` | Update stock price |
| `DELETE` | `/api/stocks/:id` | Delete a stock     |

### Orders

| Method | Endpoint      | Description                     |
| ------ | ------------- | ------------------------------- |
| `POST` | `/api/orders` | Create a new order (idempotent) |
| `GET`  | `/api/orders` | Get all orders                  |

### Fills

| Method | Endpoint              | Description                  |
| ------ | --------------------- | ---------------------------- |
| `POST` | `/api/fills`          | Create a new fill            |
| `GET`  | `/api/fills`          | Get all fills                |
| `GET`  | `/api/fills/:orderId` | Get fills for specific order |

### Portfolio

| Method | Endpoint         | Description                        |
| ------ | ---------------- | ---------------------------------- |
| `GET`  | `/api/portfolio` | Get portfolio positions and totals |

---

## 1️⃣ Stocks API

Manage stock data including symbols, company names, and current prices.

### Create Stock

```http
POST /api/stocks
```

**Request Body:**

```json
{
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "price": 187.2
}
```

**Response:** `201 Created`

```json
{
  "id": 1,
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "price": 187.2,
  "createdAt": "2025-10-23T06:12:32.817Z"
}
```

### Get All Stocks

```http
GET /api/stocks
```

**Response:** `200 OK`

```json
[
  {
    "id": 1,
    "symbol": "AAPL",
    "companyName": "Apple Inc.",
    "price": 187.2,
    "createdAt": "2025-10-23T06:12:32.817Z"
  }
]
```

### Update Stock Price

```http
PUT /api/stocks/:id
```

**Request Body:**

```json
{
  "price": 203.24
}
```

**Response:** `200 OK`

```json
{
  "id": 1,
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "price": 203.24,
  "createdAt": "2025-10-23T06:12:32.817Z"
}
```

### Delete Stock

```http
DELETE /api/stocks/:id
```

**Response:** `204 No Content`

### Validation Example

**Invalid Request:**

```json
{
  "symbol": "",
  "companyName": "Apple",
  "price": -120
}
```

**Response:** `400 Bad Request`

```json
{
  "message": [
    { "message": "Symbol is required" },
    { "message": "Price must be positive" }
  ]
}
```

---

## 2️⃣ Orders API

Handle order creation and management with built-in idempotency support.

### Create Order

```http
POST /api/orders
```

**Request Body:**

```json
{
  "symbol": "AAPL",
  "side": "buy",
  "qty": 100,
  "clientOrderId": "cli-20251022-001"
}
```

**Response:** `201 Created`

```json
{
  "id": "0a4a6585-b710-40b8-983a-50678fbc9164",
  "clientOrderId": "cli-20251022-001",
  "symbol": "AAPL",
  "side": "buy",
  "qty": 100,
  "status": "pending",
  "avgPrice": null,
  "createdAt": "2025-10-24T03:13:36.804Z",
  "updatedAt": "2025-10-24T03:13:36.804Z"
}
```

> **💡 Idempotency:** Sending the same request with the same `clientOrderId` returns the existing order instead of creating a duplicate.

### Get All Orders

```http
GET /api/orders
```

**Response:** `200 OK`

```json
[
  {
    "id": "0a4a6585-b710-40b8-983a-50678fbc9164",
    "clientOrderId": "cli-20251022-001",
    "symbol": "AAPL",
    "side": "buy",
    "qty": 100,
    "status": "pending",
    "avgPrice": null,
    "createdAt": "2025-10-24T03:13:36.804Z",
    "updatedAt": "2025-10-24T03:13:36.804Z"
  }
]
```

**Order Status Values:**

- `pending` - Order created, awaiting fills
- `partial` - Partially filled
- `filled` - Completely filled
- `cancelled` - Order cancelled

---

## 3️⃣ Fills API

Record trade executions and automatically update orders and positions.

### Create Fill

```http
POST /api/fills
```

**Request Body:**

```json
{
  "orderId": "f25e58e6-dc98-4a05-bce3-222390a937b7",
  "price": 73.5,
  "qty": 60,
  "timestamp": "2025-10-22T09:00:00Z"
}
```

**Response:** `201 Created`

```json
{
  "id": "3ffb96ba-c989-4b6a-bddc-a703e6961362",
  "orderId": "f25e58e6-dc98-4a05-bce3-222390a937b7",
  "price": 73.5,
  "qty": 60,
  "timestamp": "2025-10-24T03:35:52.667Z"
}
```

> **⚙️ Automatic Updates:** When a fill is created:
>
> - Order's `avgPrice` is calculated and updated
> - Order's `status` changes to `partial` or `filled`
> - Portfolio positions are created/updated
> - Domain event `fill.applied` is logged

### Get All Fills

```http
GET /api/fills
```

**Response:** `200 OK`

```json
[
  {
    "id": "3ffb96ba-c989-4b6a-bddc-a703e6961362",
    "orderId": "f25e58e6-dc98-4a05-bce3-222390a937b7",
    "price": 73.5,
    "qty": 60,
    "timestamp": "2025-10-24T03:35:52.667Z"
  }
]
```

### Get Fills by Order

```http
GET /api/fills/:orderId
```

**Response:** `200 OK`

```json
[
  {
    "id": "3ffb96ba-c989-4b6a-bddc-a703e6961362",
    "orderId": "f25e58e6-dc98-4a05-bce3-222390a937b7",
    "price": 73.5,
    "qty": 60,
    "timestamp": "2025-10-24T03:35:52.667Z"
  }
]
```

---

## 4️⃣ Portfolio API

View aggregated portfolio positions with real-time P&L calculations.

### Get Portfolio

```http
GET /api/portfolio
```

**Response:** `200 OK`

```json
{
  "positions": [
    {
      "symbol": "BND",
      "qty": 120,
      "avgCost": 73.75,
      "unrealizedPnL": -12.0,
      "updatedAt": "2025-10-22T09:35:00Z"
    }
  ],
  "totals": {
    "value": 8850.0,
    "pnl": -12.0
  }
}
```

**Position Fields:**

- `symbol` - Stock ticker symbol
- `qty` - Total shares owned
- `avgCost` - Average cost per share
- `unrealizedPnL` - Current profit/loss (based on market price)
- `updatedAt` - Last position update

**Totals:**

- `value` - Total portfolio value at current market prices
- `pnl` - Total unrealized profit/loss

---

## 🧪 Testing Flow

### Complete Test Scenario

```bash
# 1. Create stocks
POST /api/stocks
{ "symbol": "AAPL", "companyName": "Apple Inc.", "price": 187.2 }

POST /api/stocks
{ "symbol": "BND", "companyName": "Vanguard Bond ETF", "price": 74.0 }

# 2. Create buy order
POST /api/orders
{
  "symbol": "BND",
  "side": "buy",
  "qty": 120,
  "clientOrderId": "cli-20251022-001"
}
# Note the returned order ID

# 3. Create partial fill
POST /api/fills
{
  "orderId": "<order-id-from-step-2>",
  "price": 73.5,
  "qty": 60,
  "timestamp": "2025-10-22T09:00:00Z"
}

# 4. Create second fill to complete order
POST /api/fills
{
  "orderId": "<order-id-from-step-2>",
  "price": 74.0,
  "qty": 60,
  "timestamp": "2025-10-22T09:30:00Z"
}

# 5. Check order status
GET /api/orders
# Status should now be "filled", avgPrice should be 73.75

# 6. View portfolio
GET /api/portfolio
# Should show 120 shares of BND with calculated P&L
```

---

## 🔧 Key Features

✅ **Idempotent Orders** - Prevents duplicate orders using `clientOrderId`  
✅ **Automatic Position Tracking** - Fills automatically update portfolio  
✅ **Average Price Calculation** - Weighted average for multiple fills  
✅ **Real-time P&L** - Unrealized gains/losses based on current prices  
✅ **Input Validation** - Comprehensive request validation with clear error messages  
✅ **Event Logging** - Domain events for auditability

---

## 📝 Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/tradeflow"
PORT=5000
NODE_ENV=development
```

---

## 🐳 Docker Support

```bash
# Start with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

**Built with using Node.js, TypeScript, and Prisma**
