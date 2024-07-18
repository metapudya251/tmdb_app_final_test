# Stage 1: Build from official Docker Hub Node.js image
FROM node:lts-alpine as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Build-time variable
ARG NEXT_PUBLIC_API_KEY
ARG NEXT_PUBLIC_API_URL

# Set environment variables
ENV NEXT_PUBLIC_API_KEY=$NEXT_PUBLIC_API_KEY
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]