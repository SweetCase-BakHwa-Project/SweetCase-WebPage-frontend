FROM node:15.3.0

WORKDIR /app

RUN apt-get update -y
RUN apt-get install -y git

RUN git clone https://github.com/SweetCase-BakHwa-Project/SweetCase-WebPage-frontend.git

WORKDIR /app/SweetCase-WebPage-frontend/app

RUN npm i
CMD ["npm", "start"]
