# TradeFlow Setup Guide 🚀

This comprehensive guide will walk you through setting up TradeFlow from scratch. TradeFlow is a professional trading backend built with Node.js, TypeScript, Express, and Prisma for managing stocks, orders, fills, and portfolios.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **PostgreSQL** (v12 or higher) - [Download here](https://www.postgresql.org/download/)
- **Git** (optional) - For version control

**Check your installations:**

```bash
node --version    # Should show v16.x.x or higher
npm --version     # Should show 8.x.x or higher
psql --version    # Should show PostgreSQL 12+
```

---

## 🧱 Step 1: Create Project Folder

Open your terminal and run:

```bash
mkdir tradeflow
cd tradeflow
```

---

## ⚙️ Step 2: Initialize Node Project

```bash
npm init -y
```

**What this does:**

- Creates a `package.json` file
- Stores all project metadata and dependencies
- Sets up npm scripts for your project

---

## 🧩 Step 3: Install Core Dependencies

### Install Runtime Dependencies

```bash
npm install express dotenv cors
```

**What these do:**

- `express` → Web framework for building APIs
- `dotenv` → Loads environment variables from `.env` file
- `cors` → Enables Cross-Origin Resource Sharing

### Install Development Dependencies

```bash
npm install -D typescript ts-node-dev @types/express @types/node @types/cors nodemon
```

**What these do:**

- `typescript` → Enables TypeScript in your project
- `ts-node-dev` → Runs TypeScript directly with auto-restart on file changes
- `@types/*` → Type definitions for TypeScript
- `nodemon` → Alternative dev server with hot reload

---

## 🛠️ Step 4: Initialize TypeScript

Run:

```bash
npx tsc --init
```

This creates a `tsconfig.json` file. **Update it with these recommended settings:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 🗂️ Step 5: Create Folder Structure

Create a clean, modular folder structure:

```bash
mkdir -p src/app src/core/db src/core/errors src/core/logging src/core/utils
mkdir -p src/modules/orders src/modules/fills src/modules/portfolio src/modules/quotes src/modules/events
mkdir -p src/tests prisma
```

**Your structure should look like:**

```
tradeflow/
├── src/
│   ├── app/
│   │   ├── server.ts           # Express app configuration
│   │   └── routes.ts           # All API routes
│   ├── core/
│   │   ├── db/
│   │   │   └── prisma.ts       # Prisma client setup
│   │   ├── errors/
│   │   │   └── handlers.ts     # Error handling middleware
│   │   ├── logging/
│   │   │   └── logger.ts       # Logging configuration
│   │   └── utils/
│   │       └── helpers.ts      # Utility functions
│   ├── modules/
│   │   ├── orders/
│   │   │   ├── order.controller.ts
│   │   │   ├── order.service.ts
│   │   │   ├── order.routes.ts
│   │   │   └── order.types.ts
│   │   ├── fills/
│   │   │   ├── fill.controller.ts
│   │   │   ├── fill.service.ts
│   │   │   ├── fill.routes.ts
│   │   │   └── fill.types.ts
│   │   ├── portfolio/
│   │   │   ├── portfolio.controller.ts
│   │   │   ├── portfolio.service.ts
│   │   │   ├── portfolio.routes.ts
│   │   │   └── portfolio.types.ts
│   │   ├── quotes/
│   │   └── events/
│   ├── tests/
│   └── index.ts                # Entry point
├── prisma/
│   └── schema.prisma           # Database schema
├── .env                        # Environment variables
├── .env.example                # Example env file
├── .gitignore
├── package.json
└── tsconfig.json
```

---

## ⚡ Step 6: Create Server Files

### Create `src/app/server.ts`:

```typescript
import express, { Application } from "express";
import cors from "cors";
import routes from "./routes";
import { errorHandler } from "../core/errors/handlers";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API Routes
app.use("/api", routes);

// Error handling (must be last)
app.use(errorHandler);

export default app;
```

### Create `src/app/routes.ts`:

```typescript
import { Router } from "express";
// Import your route modules here as you create them
// import orderRoutes from "../modules/orders/order.routes";
// import fillRoutes from "../modules/fills/fill.routes";
// import portfolioRoutes from "../modules/portfolio/portfolio.routes";

const router = Router();

// Register routes
// router.use("/orders", orderRoutes);
// router.use("/fills", fillRoutes);
// router.use("/portfolio", portfolioRoutes);

export default router;
```

### Create `src/index.ts`:

```typescript
import app from "./app/server";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
  console.log(`🚀 TradeFlow server running on http://${HOST}:${PORT}`);
  console.log(`📊 Health check: http://${HOST}:${PORT}/health`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || "development"}`);
});
```

### Create `.env` file:

```env
# Server Configuration
PORT=5000
HOST=localhost
NODE_ENV=development

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/tradeflow?schema=public"

# Optional: Logging
LOG_LEVEL=debug
```

### Create `.env.example`:

```env
# Server Configuration
PORT=5000
HOST=localhost
NODE_ENV=development

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/tradeflow?schema=public"
```

### Create `.gitignore`:

```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build output
dist/
build/

# Environment variables
.env
.env.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log

# Testing
coverage/

# Prisma
prisma/*.db
prisma/*.db-journal
```

---

## 🧠 Step 7: Add NPM Scripts

Update your `package.json` scripts section:

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio",
    "test": "jest",
    "lint": "eslint . --ext .ts",
    "format": "prettier --write \"src/**/*.ts\""
  }
}
```

### Test your server:

```bash
npm run dev
```

**Expected output:**

```
🚀 TradeFlow server running on http://localhost:5000
📊 Health check: http://localhost:5000/health
🔧 Environment: development
```

**Test the health endpoint:**

```bash
curl http://localhost:5000/health
```

---

## 🗄️ Step 8: Setup Database with Prisma

### Install Prisma:

```bash
npm install prisma @prisma/client
npm install -D prisma
```

### Initialize Prisma:

```bash
npx prisma init
```

This creates:

- `prisma/schema.prisma` - Your database schema
- Updates `.env` with `DATABASE_URL`

### Create Database Schema (`prisma/schema.prisma`):

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Stock {
  id          Int      @id @default(autoincrement())
  symbol      String   @unique
  companyName String
  price       Float
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("stocks")
}

model Order {
  id            String   @id @default(uuid())
  clientOrderId String   @unique
  symbol        String
  side          String   // "buy" or "sell"
  qty           Int
  status        String   @default("pending") // pending, partial, filled, cancelled
  avgPrice      Float?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  fills Fill[]

  @@map("orders")
}

model Fill {
  id        String   @id @default(uuid())
  orderId   String
  price     Float
  qty       Int
  timestamp DateTime @default(now())

  order Order @relation(fields: [orderId], references: [id])

  @@map("fills")
}

model Position {
  id        String   @id @default(uuid())
  symbol    String   @unique
  qty       Int
  avgCost   Float
  updatedAt DateTime @updatedAt

  @@map("positions")
}

model Event {
  id        String   @id @default(uuid())
  type      String
  data      Json
  createdAt DateTime @default(now())

  @@map("events")
}
```

### Setup PostgreSQL Database:

**Option 1: Local PostgreSQL**

```bash
# Create database
createdb tradeflow

# Update .env with your credentials
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/tradeflow?schema=public"
```

**Option 2: Docker PostgreSQL**
Create `docker-compose.yml`:

```yaml
version: "3.8"

services:
  postgres:
    image: postgres:15-alpine
    container_name: tradeflow_db
    environment:
      POSTGRES_USER: tradeflow
      POSTGRES_PASSWORD: tradeflow123
      POSTGRES_DB: tradeflow
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Start PostgreSQL:

```bash
docker-compose up -d
```

Update `.env`:

```env
DATABASE_URL="postgresql://tradeflow:tradeflow123@localhost:5432/tradeflow?schema=public"
```

### Run Database Migration:

```bash
npx prisma migrate dev --name init
```

### Generate Prisma Client:

```bash
npx prisma generate
```

### Create Prisma Client Instance (`src/core/db/prisma.ts`):

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

export default prisma;
```

---

## 🧩 Step 9: Setup Code Quality Tools

### Install ESLint and Prettier:

```bash
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Create `.eslintrc.json`:

```json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint", "prettier"],
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
```

### Create `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "always"
}
```

---

## 🧪 Step 10: Setup Testing (Optional)

### Install Jest:

```bash
npm install -D jest ts-jest @types/jest supertest @types/supertest
```

### Create `jest.config.js`:

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts", "!src/tests/**"],
};
```

---

## 🐳 Step 11: Docker Setup (Optional)

### Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY prisma ./prisma
RUN npx prisma generate

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

### Update `docker-compose.yml` to include app:

```yaml
version: "3.8"

services:
  postgres:
    image: postgres:15-alpine
    container_name: tradeflow_db
    environment:
      POSTGRES_USER: tradeflow
      POSTGRES_PASSWORD: tradeflow123
      POSTGRES_DB: tradeflow
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U tradeflow"]
      interval: 10s
      timeout: 5s
      retries: 5

  app:
    build: .
    container_name: tradeflow_app
    ports:
      - "5000:5000"
    environment:
      DATABASE_URL: "postgresql://tradeflow:tradeflow123@postgres:5432/tradeflow?schema=public"
      NODE_ENV: production
    depends_on:
      postgres:
        condition: service_healthy
    restart: unless-stopped

volumes:
  postgres_data:
```

### Run with Docker:

```bash
docker-compose up -d --build
```

---

## ✅ Verification Checklist

Make sure everything works:

- [ ] Server starts without errors: `npm run dev`
- [ ] Health endpoint responds: `curl http://localhost:5000/health`
- [ ] Database is connected and migrated: `npx prisma studio`
- [ ] TypeScript compiles: `npm run build`
- [ ] ESLint runs: `npm run lint`
- [ ] Prettier formats: `npm run format`

---

## 🎯 Next Steps

1. **Implement Modules**: Start building your order, fill, and portfolio modules
2. **Add Validation**: Use libraries like `zod` or `joi` for request validation
3. **Error Handling**: Create custom error classes and middleware
4. **Logging**: Implement structured logging with `winston` or `pino`
5. **Authentication**: Add JWT-based authentication if needed
6. **API Documentation**: Use Swagger/OpenAPI for API docs
7. **Testing**: Write unit and integration tests

---

## 🆘 Troubleshooting

### Port Already in Use

```bash
# Find process using port 5000
lsof -i :5000
# Kill the process
kill -9 <PID>
```

### Database Connection Issues

```bash
# Test PostgreSQL connection
psql -h localhost -U tradeflow -d tradeflow

# Check if PostgreSQL is running
pg_isready
```

### TypeScript Errors

```bash
# Clear build cache
rm -rf dist/
# Rebuild
npm run build
```

### Prisma Issues

```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Regenerate Prisma Client
npx prisma generate
```

---

## 📚 Useful Commands

```bash
# Development
npm run dev                 # Start dev server with hot reload
npm run build               # Build for production
npm start                   # Run production build

# Database
npx prisma studio          # Open Prisma Studio GUI
npx prisma migrate dev     # Create and apply migration
npx prisma db push         # Push schema without migration
npx prisma db seed         # Run seed script

# Code Quality
npm run lint               # Check for linting errors
npm run format             # Format code with Prettier
npm test                   # Run tests

# Docker
docker-compose up -d       # Start services
docker-compose down        # Stop services
docker-compose logs -f     # View logs
```

---

## 🎉 Success!

You've successfully set up TradeFlow! Your backend is now ready for development.

**What you've accomplished:**
✅ Created a professional Node.js + TypeScript project  
✅ Set up Express server with modular architecture  
✅ Configured PostgreSQL database with Prisma ORM  
✅ Added code quality tools (ESLint, Prettier)  
✅ Set up development and production environments  
✅ Configured Docker for easy deployment

**Happy coding! 🚀**
