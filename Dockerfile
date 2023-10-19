# Use a imagem Node.js 18 como base
FROM node:18

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json para o contêiner
COPY package*.json ./

# Copie o arquivo tsconfig.json para o contêiner
COPY tsconfig.json ./

# Copie o arquivo sequelize.js para o contêiner
COPY sequelize.js ./

# Copie o arquivo .sequelizerc para o contêiner
COPY .sequelizerc ./

# Instale as dependências do projeto
RUN npm install

# Copie o código-fonte para o contêiner
COPY ./src ./src

# Compile o código TypeScript (se necessário)
# RUN npm run build

# Exponha a porta em que a aplicação vai ser executada
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "start"]
