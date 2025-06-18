FROM node:16-slim

WORKDIR /app

COPY package.json .
COPY package-lock.json .

# COPY keys keys
# RUN mkdir keys

RUN npm install

COPY build build

COPY server.js .

EXPOSE 443
CMD [ "node", "server.js" ]