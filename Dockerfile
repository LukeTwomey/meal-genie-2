# Build the client
FROM node:20.11.1-alpine3.18 AS build

COPY package.json index.html ./
COPY ./src /src
RUN yarn
RUN yarn build

# Serve it with nginx
FROM nginx:latest

COPY --from=build ./dist /usr/share/nginx/html