FROM node:16

# crea un directorio y copia el archivo package
WORKDIR /usr/src/app

# copia el package.json porque tiene todas las dependencias
COPY package*.json ./

#Ejecuta npm install para 
RUN npm install

#copia todo el contenido de nuestro proyecto en el contenedor
COPY . .

#escucha peticiones a través del puerto 3000
EXPOSE 3000
CMD [ "node", "index.js" ]