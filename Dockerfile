FROM node:18.18

WORKDIR /usr/src/app

# Instala Nodemon globalmente
RUN npm install -g nodemon

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]