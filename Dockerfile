FROM node:20-alpine AS builder
WORKDIR /app

# Install curl for health checks in dev compose
RUN apk add --no-cache curl

COPY package.json package-lock.json ./

# Use npm ci for reproducible builds
RUN npm ci

COPY . .

# Build the application
RUN npm run build

# --- Production Stage ---
FROM nginx:1.27-alpine AS production

# Create a non-root user and group for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy only the built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Ensure the app user can read the files
RUN chown -R appuser:appgroup /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/html

# Install curl for health checks
RUN apk add --no-cache curl

# Expose the port Nginx listens on
EXPOSE 80

# Healthcheck to ensure Nginx is serving content
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Graceful shutdown signal for Nginx
STOPSIGNAL SIGQUIT

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
