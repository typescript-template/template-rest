# syntax=docker/dockerfile:1.7
FROM node:20-bookworm-slim AS build
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build
RUN npm prune --omit=dev

FROM node:20-bookworm-slim AS runtime
WORKDIR /app

COPY .env .env
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

CMD ["node", "dist/src/index.js"]
