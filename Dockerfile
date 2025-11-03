# Stage 1: Build the React application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock, pnpm-lock.yaml)
COPY package*.json ./

# Install dependencies using npm ci for deterministic builds
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application for production. The output will be in /app/dist
RUN npm run build

# Stage 2: Serve the application using a lightweight Nginx server
FROM nginx:stable-alpine

# Copy the build output from the builder stage to Nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Create a basic Nginx configuration for a Single Page Application (SPA)
# This configuration ensures that all routes are directed to index.html,
# which is necessary for client-side routing to work correctly.
RUN echo 'server {\n' \
'    listen 80;\n' \
'    server_name localhost;\n' \
'\n' \
'    location / {\n' \
'        root   /usr/share/nginx/html;\n' \
'        index  index.html index.htm;\n' \
'        try_files $uri $uri/ /index.html;\n' \
'    }\n' \
'\n' \
'    error_page   500 502 503 504  /50x.html;\n' \
'    location = /50x.html {\n' \
'        root   /usr/share/nginx/html;\n' \
'    }\n' \
'}' > /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx in the foreground when the container launches
CMD ["nginx", "-g", "daemon off;"]
