FROM node:14.17.1

WORKDIR usr/src/app/

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 9000

CMD "node" "src/server.js"