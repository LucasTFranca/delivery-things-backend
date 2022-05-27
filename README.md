# Delivery Things - BackEnd

Delivery Things - back end é uma simples api, utilizando `nodejs`, `express` e `knex`.

Com a api você pode criar produtos, usuários, buscar 
por todos produtos e usuários existentes, entre outras coisas.


## Requisitos

- Node js
- MySQL
- Npm

## Tecnologias Utilizadas

- Node js
- Cors
- Joi
- Knex
- EsLint
- MySQL
- JWT


## Instalação

Primeiro clone o repositorio de back end utilizando o comando:

```bash
git clone git@github.com:LucasTFranca/delivery-things-backend.git
cd delivery-things-backend
```

Agora instale as dependencias do projeto:

```bash
npm install
```

## Configuração

Vá no arquivo `knexfile.js` e modifique o valor da chave `user` e `password`, pelo
seu usuário e senha do MySQL, segue abaixo o objeto que você irá modificar:

```bash
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.HOST,
      port: 3306,
      database: 'coinsure',
      user: 'Seu-usuario-aqui',
      password: 'Sua-senha-aqui',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
  },

};
```

## Como Utilizar

Antes de começar a utilizar api, crie o banco de dados como o comando:

```bash
npx knex migrate:latest
```

Para começar a utilizar a api, digite o comando abaixo:

```bash
npm start
```

## Front End

Para instalar e utilizar o Front End, leia a documentação no link a seguir:

https://github.com/LucasTFranca/delivery-things-frontend
