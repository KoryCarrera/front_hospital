FROM node:24-slim

WORKDIR /app

COPY package*.json package-lock* ./

RUN npm install

COPY . .

EXPOSE 4000
EXPOSE 24678

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4000" ]