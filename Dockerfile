# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
# Use ci for faster, more reliable builds in CI/CD environments
RUN npm ci

# Copy all source files
COPY . .

# Build the application
# This creates the dist/ directory with optimized static files
RUN npm run build

# Stage 2: Production nginx server
FROM nginx:1.27-alpine AS production

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 3000 as required
EXPOSE 3000

# Health check to ensure nginx is running properly
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

# Start nginx in foreground mode
CMD ["nginx", "-g", "daemon off;"]
