# ---- Build React App ----
FROM node:24 as build

WORKDIR /client

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.29.0-alpine

COPY ./web_server/nginx.conf /etc/nginx/nginx.conf
COPY ./web_server/server.conf /etc/nginx/conf.d/server.conf

COPY --from=build ./client/dist /usr/share/nginx/html

COPY run.sh /run.sh
RUN chmod +x /run.sh

EXPOSE 3000

ENTRYPOINT ["./run.sh"]