FROM node:23.5.0
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run build
WORKDIR /app/build
EXPOSE 3000:3000
CMD node index.js