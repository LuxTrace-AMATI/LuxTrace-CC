FROM node:20-alpine as build

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm run build

ENV NODE_ENV=production

COPY . . 

EXPOSE 3000
# FROM nginx:alpine as prod

# COPY --from=build /app/build/usr/share/nginx/html
ENV PORT=3000
ENV MODEL_URL='https://storage.googleapis.com/amati-capstone_cloudbuild/requirements.json'


RUN apt-get update && \
    apt-get install -y build-essensial \
    wget \
    python3 \
    make \
    gcc \
    libc6-dev\
    wget
RUN npm install


CMD [ "npm", "run", "prod" ]