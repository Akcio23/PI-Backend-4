# Authentication API - JWT with MongoDB and bcrypt

This is a simple API for user authentication, with **registration** and **login** features, using JWT (JSON Web Tokens) for authentication, MongoDB as the database, and bcrypt for password encryption.

## Features

- **User Registration**: Allows a new user to register on the platform.
- **User Login**: Allows an existing user to log in and receive a JWT token for authentication in other routes.

## Technologies Used

- **Node.js**: JavaScript runtime environment for the server.
- **Express.js**: Framework for building the API.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM (Object Document Mapping) for interacting with MongoDB.
- **bcryptjs**: Library for password encryption and verification.
- **jsonwebtoken**: Library for creating and verifying JWT tokens.
- **dotenv**: For loading environment variables.

# Prerequisites

Before running the application, make sure you have the following tools installed:

- **Node.js** (version 14 or higher)
- **MongoDB** (local or using MongoDB Atlas)

# Installation

- 1. Clone the repository:
     git **clone** https://github.com/Akcio23/PI-4-semestre

- 2. Install the dependencies:
- **npm install**

- 3. Create a .env file at the root of the project with the following variables:

- DATABASE_URL=mongodb://localhost:27017/database-name
- KEY=your-secret-key

- 4. Start the server:
- **npm run dev**

# Endpoints

## POST /login/signup

- Registers a new user. The user needs to provide a user, email, password and confirmedPassword.

{
"user": "test",
"email": "test@gmail.com",
"password": "test",
"confirmedPassword": "test"
}

### Response(Sucess - 200)

{
message: user created successfully"
}

### Response(Error-400)

{
message: Error creating user
}

## POST/login/signin

- Logs in an existing user. The user needs to provide the email and password.

{
"email": "email@domain.com",
"password": "secret-password"
}

### Response(Sucess - 200)

{
"token": "your-generated-jwt-token"
}

### Response(Error-400)

{
"message": "Invalid credentials"
}
