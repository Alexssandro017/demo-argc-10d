#Etapa 1: Construccion de los recursos
FROM node:20 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# /dist
# /build -Solo en node
RUN npm run build

#Etapa 2: Contruccion de la imagen
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]