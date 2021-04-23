FROM node:14.15.0-slim

ENV NODE_ENV=production

WORKDIR /techno

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY /commands /
COPY . .

CMD [ "node", "."]