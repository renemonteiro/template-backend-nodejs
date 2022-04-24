FROM node:16

# Set the working directory to /usr/app
WORKDIR /app

#Copy the package.json file to /usr/src/app
COPY package.json .

#Install node_modules
RUN npm install

#Copy all the files from the project's root to /usr/app
COPY . .




