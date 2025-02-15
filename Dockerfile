FROM node:18-alpine AS base

FROM base AS deps

WORKDIR /app