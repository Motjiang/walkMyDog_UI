# Stage 1: Build Angular App
FROM node:20.18.2 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install Angular CLI
RUN npm install -g @angular/cli

# Copy all files and build the app
COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve with nginx
FROM nginx:latest

# Copy nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app to nginx's html directory
COPY --from=build /app/dist/walkmydog_ui /usr/share/nginx/html

# Expose port 80 for the app
EXPOSE 80
