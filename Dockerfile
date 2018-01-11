FROM node

WORKDIR usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run test

EXPOSE 3000