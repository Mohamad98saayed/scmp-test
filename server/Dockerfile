FROM node:16.16.0

RUN npm install -g nodemon

WORKDIR "/app"

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]