FROM node:23-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install


CMD ["pnpm", "dev"]
