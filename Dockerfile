
FROM node:18-alpine
 
WORKDIR /app
 
COPY package.json ./
RUN npm install
 
COPY index.html style.css app.js server.js ./
 
EXPOSE 3000
 
CMD ["npm", "start"]
