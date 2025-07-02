FROM node:22.17.0-alpine3.21 as base-build
COPY package.* .
RUN npm ci

FROM node:22.17.0-alpine3.21 as deploy
WORKDIR /app
COPY --from=base-build node_modules .
COPY . .

RUN npm run build

CMD [ "npm", "start" ]
