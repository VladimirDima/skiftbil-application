FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy files
COPY package.json tsconfig.json /usr/src/app/

# Install app dependencies
RUN npm install --global tsc-watch npm typescript concurrently @angular/cli
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 4200

CMD [ "npm", "run", "start" ]