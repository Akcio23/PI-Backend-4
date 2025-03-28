# API para o projeto interdiciplinar 4° semestre 

Esta é uma API simples para autenticação de usuários, com funcionalidades de registro e login, utilizando JWT (JSON Web Tokens) para autenticação, MongoDB como banco de dados e bcrypt para criptografia de senhas.

---

## 🔧Funcionalidades
- **Registro de Usuário**: Permite que um novo usuário se cadastre na plataforma.
- **Login de Usuário**: Permite que um usuário existente faça login e receba um token JWT para autenticação em outras rotas.
- **Rotas protegidas**: Criação de middleware para proteção de rotas.

---

## 🚀Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript para o servidor.
- **Express.js**: Framework para construção da API.
- **MongoDB**: Banco de dados NoSQL para armazenar dados dos usuários.
- **Mongoose**: ODM (Mapeamento Objeto-Documento) para interagir com o MongoDB.
- **Bcryptjs**: Biblioteca para criptografia e verificação de senhas.
- **Jsonwebtoken**: Biblioteca para criação e verificação de tokens JWT.
- **Dotenv**: Para carregar variáveis de ambiente.
- **Eslint**: Para padronização do projeto.
- **Eslint-plugin-prettier**: Para correção de codigos.
- **Husky**: Para automaticar checagem de qualidade antes dos commits.

---

## ⁉️Pré-requisitos
Antes de executar a aplicação, certifique-se de ter instalado:
- Node.js (versão 14 ou superior)
- MongoDB (local ou via MongoDB Atlas)

---

## 🛠️Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/Akcio23/PI-4-semestre
   ```

2. Instale as dependências:
   ```javascript
    npm install
   ```
3. Crie um arquivo .env na raiz do projeto com as variáveis:
   ```
   DATABASE_URL=mongodb://localhost:27017/nome-do-banco
   KEY=sua-chave-secreta
   PORT=9000
   REACT_APP_API_URL= http://localhost:9000
   ```
4. Inicie o servidor:
   ```
   npm run dev
   ```
   ---
   
## 〽️Endpoints

- POST /login/signup
  
   - Registra um novo usuário.
     
        Corpo da requisição:
        
          {  
          "user": "nome-do-usuário",  
          "email": "email@dominio.com",  
          "password": "senha",  
          "confirmedPassword": "senha"
          }  
          
      - **Resposta**
        
           Sucesso (200):
        
   
              { "message": "Usuário criado com sucesso" }  
                
           Erro(400):
        
             
             { "message": "Erro ao criar usuário" }  
             
        ***
        
  - POST login/signin
    
       - Autentica um usuário existente.
         
            Corpo da requisição:
         ```
         {  
           "email": "email@dominio.com",  
           "password": "senha"  
         }
         ```  
           - **Resposta**
             
             Sucesso (200):  
             ```
             { "token": "token-jwt-gerado" }  
             ```  
             Erro (400):
             ```
             { "message": "Credenciais inválidas" }
             ```
         ***
         
    - POST /user
   
         - Buscar usuario
           
            Corpo da requisição:
           ```
           {
           "email": "email@dominio.com",  
           "Authorization": "Bearer TOKENJWT"  
           }  
           ```
              - **Resposta**
                
                   Sucesso(200):
                   ```
                   { { "user" } }
                   ```
                   Erro (400):
                   ```
                   { "message": 'Unauthorized'}
                   ```
---
## 📁Estrutura do Projeto
```plaintext
├── src/backend/
│   ├── controllers/       # Lógica dos controladores
│   ├── middlewares/       # Middlewares (ex: autenticação)
│   ├── models/            # Modelos do banco de dados
│   ├── routes/            # Definição das rotas da API
│   ├── serializers/       # Serialização de dados  
│   ├── service/           # Lógica de negócios/services
│   ├── utils/             # Utilitários/helpers
│   └── server.js          # Arquivo principal do servidor
├── .env                   # Variáveis de ambiente
└── package.json           # Dependências do projeto
          
