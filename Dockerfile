FROM node:latest

WORKDIR /home/app

COPY package*.json ./

RUN npm i

COPY . ./

CMD ["npm", "run", "start"]