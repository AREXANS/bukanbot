FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm install -g pm2 && pm2 start index.js && pm2 save

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]

