# Base image
FROM node:14

# Set working directory in the Docker container
WORKDIR /app

# Copy package.json and yarn.lock before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all files
COPY . .

# Install nodemon globally
RUN yarn global add nodemon

# Build app
RUN yarn build

# Expose the port
EXPOSE 8080

# Command to run the app with nodemon for file watching and hot-reloading
CMD ["yarn", "run", "dev"]
