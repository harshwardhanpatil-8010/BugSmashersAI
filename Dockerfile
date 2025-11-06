# Stage 1: Build the React application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
# This leverages Docker's layer caching
COPY package.json package-lock.json ./

# Install dependencies using npm ci for reproducible builds
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:1.27-alpine AS production

# Create a non-root user and group for security
RUN addgroup -g 1001 -S nginx && \
    adduser -S nginx -u 1001

# Copy the built static files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Switch to the non-root user
USER nginx

# Healthcheck to ensure Nginx is running
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
