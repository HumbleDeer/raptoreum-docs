# Using Node 16
FROM node:16

# Create application directory
WORKDIR /usr/src/app

# Install app dependencies
# Copy both package & package-lock / yarn-lock
COPY package*.json ./
COPY yarn*.lock ./

# Install dependencies
RUN yarn install

# Bundle application source
COPY . ./

# Runs on 3000
EXPOSE 3000

# Build app
RUN yarn build

# Serve
CMD [ "yarn", "serve" ]