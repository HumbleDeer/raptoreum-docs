# Using Node 16
FROM node:16

# Create application directory
WORKDIR /usr/src/app

# Copy both package & package-lock / yarn-lock
COPY package*.json ./
COPY yarn*.lock ./

# Install dependencies
RUN yarn install

# Bundle application source (cache layers)
COPY . ./

# Runs on 3000
EXPOSE 3000

# Docusaurus Build 
RUN yarn build

# Docusaurus serve
CMD [ "yarn", "serve" ]