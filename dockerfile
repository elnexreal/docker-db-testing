FROM node:20

WORKDIR /app

# force docker to not use the cache if package.json is changed
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

# copy all the app content
COPY . .

EXPOSE 3000

ENTRYPOINT [ "/app/entrypoint.sh" ]