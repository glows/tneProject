FROM risingstack/alpine:latest

ENV PORT 3001

EXPOSE 3001

COPY package.json packge.json

RUN npm install

COPY . .
RUN npm run build

CMD ['node', "build/app.js"]