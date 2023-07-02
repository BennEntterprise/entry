# Use the official Node.js image as the base image

FROM node:16

# Set the working directory inside the container

WORKDIR /app

# Copy the package.json and yarn.lock files to the container

COPY package.json ./

# Install project dependencies

RUN yarn install --production

# Copy the entire project to the container

COPY . .

# Build the React app

RUN yarn build

# Expose the port that the React app will run on

EXPOSE 3000

# Define the command to start the application

CMD ["yarn", "start"]
