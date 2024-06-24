# docker build --target frontend --no-cache -t tecinforibeiro/health_solutions_architects:frontend .
# FROM node:alpine as frontend

# WORKDIR /usr/src/app

# COPY . /usr/src/app

# RUN npm install -g @angular/cli

# RUN npm install

# CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "3000"]

# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:latest AS ngi
COPY --from=build /usr/local/app/dist/health-solutions-architects/browser /usr/share/nginx/html
COPY /nginx/nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
