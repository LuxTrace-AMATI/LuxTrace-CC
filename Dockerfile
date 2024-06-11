FROM node:20-alpine as build


WORKDIR /app


COPY package.json package-lock.json* ./


RUN npm install


COPY . .


RUN npm run build

# Set environment variables
#ENV NODE_ENV=production
#ENV DB_USER
#ENV DB_PASSWORD
#ENV DB_DATABASE
# Expose the application port
EXPOSE 3000

# Install additional packages
RUN apk update && \
    apk add --no-cache \
    build-base \
    wget \
    python3

# Start the application
CMD ["npm","start"]
