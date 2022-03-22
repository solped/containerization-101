# base image
FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./server /usr/src/app/
RUN npm install

CMD ["npm", "start"]
