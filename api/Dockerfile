# Base image
FROM node:6

# Install dependencies
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/

# Add everything
WORKDIR /usr/src/app
ADD . /usr/src/app

# Expose port
EXPOSE 3000

# Run app
CMD [ "npm", "run", "start" ]

