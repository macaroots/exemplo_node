FROM node:15-alpine3.12

WORKDIR /home/node/app
COPY ./app/package.json .
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]

COPY ./app .
