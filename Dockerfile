# Stage 1: Build the React application
# Use a specific Node.js LTS version on Alpine for a small and secure base
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json) first
# This leverages Docker's layer caching, so dependencies are only re-installed if these files change
COPY package.json package-lock.json* ./

# Use 'npm ci' for reproducible builds from the lock file
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Run the build script to generate static assets
RUN npm run build

# Stage 2: Serve the application using Nginx
# Use a minimal and secure Nginx image based on Alpine
FROM nginx:1.27-alpine

# Copy the custom Nginx configuration file
# This file is optimized for serving Single Page Applications (SPAs)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static assets from the 'builder' stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx web server
EXPOSE 80

# Add a healthcheck to verify that Nginx is running and serving content
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Gracefully stop Nginx on container shutdown
STOPSIGNAL SIGQUIT

# Start Nginx in the foreground when the container launches
CMD ["nginx", "-g", "daemon off;"]
