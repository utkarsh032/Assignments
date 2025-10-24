# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript (optional if we use ts-node-dev)
RUN npm run build

# Expose port
EXPOSE 3000

# Start command
CMD ["npm", "run", "dev"]
