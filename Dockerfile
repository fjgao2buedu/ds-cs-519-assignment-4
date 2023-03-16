FROM node:latest AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

ENV NODE_ENV=production

COPY public/ public
COPY src/ src
RUN npm run build

FROM httpd:alpine
WORKDIR /var/www/html
COPY --from=build /build/build/ .