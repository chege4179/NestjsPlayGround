FROM node:20-alpine as builder

ARG DB_PASSWORD
ARG PORT
ARG DB_HOST
ARG DB_USERNAME
ARG DB_PORT


ENV DB_PASSWORD=${DB_PASSWORD}
ENV PORT=${PORT}
ENV DB_HOST=${DB_HOST}
ENV DB_USERNAME=${DB_USERNAME}
ENV DB_PORT=${DB_PORT}

WORKDIR /app

COPY package*.json ./

RUN npm install npm@latest
RUN npm install --target_arch=x64 --target_platform=linux --target_libc=glibc

EXPOSE ${PORT}
COPY . .


RUN npm run build

FROM node:20-alpine AS production

# Arguments for environment variables
ARG PORT

# Set environment variables
ENV NODE_ENV=production
ENV PORT=${PORT}

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist


# Expose the necessary port
EXPOSE ${PORT}

# Start the application
CMD ["npm", "start"]