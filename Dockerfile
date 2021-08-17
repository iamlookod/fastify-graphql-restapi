FROM node:14-alpine as development

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn
COPY . .

RUN yarn build

FROM node:14-alpine as production

ENV NODE_ENV=production

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn
COPY . .
COPY --from=development /usr/app/dist ./dist
COPY --from=development /usr/app/ormconfig.js ./ormconfig.js

CMD ["yarn", "start"]