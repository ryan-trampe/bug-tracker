FROM node:latest
EXPOSE 8080
WORKDIR /app

COPY package.json .
RUN npm install

# for deployment, deploy on node running server
# CMD ["node","src/server.js"]

# for development, use nodemon
RUN npm install nodemon -g
CMD ["nodemon","src/server.js"]