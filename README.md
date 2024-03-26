# REACT USERS

> Este projeto é uma aplicação web que utiliza React, TypeScript, Tailwind CSS e uma API REST. Ele apresenta uma lista simulada de usuários, permitindo operações de leitura e escrita de forma dinâmica e responsiva.

<table>
  <tr>
    <th><a href="https://react-users-renansouzasm.vercel.app/" target="_blank">DEPLOY</a></th>
  </tr>

  <tr>
    <td>
      <img 
        width="600px"
        alt="preview"
        src="https://github.com/renansouzasm/React-users/assets/101893896/7774fea5-7634-436b-b365-81b1642bf50d"
      />
    </td>
  </tr>
</table>

### Tecnologias

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Objetivo

O objetivo desse projeto é fazer uma lista de usuários, simples, mas também criar uma API REST usando o Prisma ORM e Fastify para simplificar o acesso e a manipulação do banco de dados, trabalhando tanto com frontend quanto backend.

Também foi feito um design mais trabalhado pelo Figma para dar uma _"beleza"_ ao projeto, usando por exemplo fotos de perfis geradas automaticamente no card dos usuários, algo que não é necessário nesse tipo de aplicação.

#### Imagens

`https://source.unsplash.com/random?a=1`

A aplicação é responsiva e foi feita utilizando o conceito de Mobile First. No quesito funcionalidades, foi feito o consumo da API criada na pasta backend, tipagem dos dados e utilização das rotas com auxilio dos React Hook's.

### Como funciona?

Para rodar é bem simples, basta instalar as dependências do projeto pelo console, entrar em ambas as pastas principais (frontend & backend) e utilizar o comando para iniciar `npm run dev`.

#### IMPORTANTE

Para que o projeto rode corretamente, lembre-se de definir as variáveis de ambiente

```node
npm install
```
```node
cd frontend
cd backend
```
```node
npm run dev
```

#### EXEMPLO DE VARIÁVEIS AMBIENTE

Crie um arquivo `.env` nas pastas frontend e backend e coloque os valores desejados (O local em que deseja rodar a aplicação). No caso do frontend pode inserir a URL onde estará rodando a API no arquivo `frontend/src/services/api`. 

Exemplo: `this.baseUrl = "http://localhost:3000";`

Lembre-se também de _"configurar"_ o **CORS** para permitir que uma URL específica tenha acesso as requisições feitas ao seu backend, no caso será a URL onde seu frontend estiver rodando.

No arquivo `backend/prisma`, você também pode mudar o banco de dados que irá utilizar, assim como a URL para acessa-lo, URL essa que também deverá estar presente no arquivo `.env`

```
DATABASE_URL = "mongodb://<user>:<password>@databasecluster..."
CORS_ORIGIN = "http://localhost:4000"

HOST = "localhost"
PORT = 3000
```

### Exemplo de dados que a API irá retornar

```javascript
_id: ObjectId('1234')
fullName: "Elizabeth Olsen"
email: "elizabeth_olsen@email.com"
status: true
created_at: 2024-03-10
updated_at: 2024-03-10
```

### 📃 LICENSE

For more details [LICENSE](https://github.com/renansouzasm/React-users/blob/main/LICENSE)
