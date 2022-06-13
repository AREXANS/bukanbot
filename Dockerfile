FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  pm2 \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npm i -g pm2", "pm2 start index.js", "pm2 save", "pm2 monit"]

