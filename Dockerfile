# Using Node 16
FROM node:16

# Create application directory
WORKDIR /usr/src/app

# Install app dependencies
# Copy both package & package-lock
COPY package*.json ./

# Install dependencies
RUN yarn install

# Bundle application source
COPY . .

# Runs on 3000
EXPOSE 3000

# Cmd to serve
CMD [ "yarn", "serve" ]

