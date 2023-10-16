FROM node:18

WORKDIR /backend

COPY package*.json ./

COPY prisma ./prisma/


COPY tsconfig.json ./

COPY . .

RUN npm install -g nodemon 

RUN npm install


RUN npx prisma migrate

EXPOSE 4001

CMD [ "npm","start"]