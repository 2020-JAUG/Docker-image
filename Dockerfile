FROM node:18.9-alpine as base

WORKDIR /home/node/app

COPY package.json ./

COPY . .

RUN npm install

# To production

FROM bas as production

ENV NODE_PATH=./build

# Compile our ts

RUN npm run build