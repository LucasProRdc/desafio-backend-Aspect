# desafio-backend-Aspect

# Desafio Backend - Aspect

Este projeto foi desenvolvido como parte de um desafio técnico, com o objetivo de demonstrar habilidades no desenvolvimento de uma API REST utilizando **Node.js** com **NestJS**, **Prisma ORM** e **PostgreSQL**.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

## 🧠 Funcionalidades

- CRUD de exames médicos (`Exams`)
- Agendamento de consultas (`Appointments`)
- Datas disponíveis para exames (`Available Dates`)
- Filtros por `examId`
- Validação e tratamento de erros personalizados

## 🛠️ Como rodar o projeto localmente

 1. Clone o repositório

git clone https://github.com/LucasProRdc/desafio-backend-Aspect.git
cd desafio-backend-Aspect

2. Instale as dependências

npm install
# ou
yarn

3. Configure o banco de dados

Crie um arquivo .env com a seguinte variável (ajuste conforme seu ambiente PostgreSQL):

DATABASE_URL="postgresql://usuario:senha@localhost:5432/nomedobanco"

4. Rode as migrações do banco

npx prisma migrate dev --name init

5. Inicie o servidor

npm run start:dev
# ou
yarn start:dev



