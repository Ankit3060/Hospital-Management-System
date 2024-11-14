FROM node:16

WORKDIR /app


COPY package*.json ./


RUN npm install --legacy-peer-deps


COPY . .

EXPOSE 1000

CMD ["npm", "run", "dev"]
