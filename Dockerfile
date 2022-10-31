FROM node:10-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN ls -a

RUN npm run build

EXPOSE 7000

CMD [ "node", "./build/index.js" ]