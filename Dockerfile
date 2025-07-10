# Multi-stage Dockerfile for development and testing

# Base stage with all dependencies
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Development stage (default)
FROM base AS development
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Test stage
FROM base AS test
COPY . .
RUN npm run build
CMD ["npm", "test"] 