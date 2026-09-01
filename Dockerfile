# syntax=docker/dockerfile:1

# Stage 1: Build static assets with Bun
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code and config
COPY astro.config.mjs tailwind.config.mjs tsconfig.json ./
COPY public/ ./public/
COPY src/ ./src/

# Build static output to /app/dist
RUN bun run build

# Stage 2: Serve static files with Caddy
FROM caddy:2-alpine AS runner

# Copy built static files
COPY --from=builder /app/dist /srv

# Copy Caddy configuration
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
