# Desafio Pagway

Simple Payment Service Provider (PSP)

---

<p align="center">
<a href="#dependências">Dependências</a> | 
<a href="#configurações">Configurações</a> | 
<a href="#documentação">API</a> |
<a href="#deploy">Deploy</a> 
</p>

---

## Dependências

- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) ^v11.15.0
- [yarn](https://yarnpkg.com/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Configurações
 - Instalação
```
git clone https://github.com/alanfljesus/desafio_pagway.git
cd desafiopagway
npm install
```
1. Configure o arquivo `.env` com as informações do banco de dados

```
DATABASE_URL="postgresql://johndoe:randompasswordlocalhost:5432/mydb?schema=public"
```

2. Execute o servidor:

```npm run start``` ou  ```yarn dev```

- Prisma ORM

3. Para criar uma nova migration:
   
```npx prisma migrate dev```

4. Visualizar o banco de dados:
   
```npx prisma studio```

## Documentação
A documentação da API está disponível através do Swagger UI. Após executar o servidor localmente, você pode acessar a documentação em:
```
http://localhost:3333/docs
```
Para versão em produção, visite: </br>
```
https://desafio-pagway.onrender.com/docs
```
**OBS:** Ao usar a documentação Swagger da API em produção, certifique-se de selecionar "API de produção" em "servers".

## Deploy
O projeto está atualmente hospedado no <a href="https://render.com">Render</a>.
