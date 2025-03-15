import pkg from 'jsonwebtoken';
const { sign } = pkg;


const user = {
    id_user: "1234",
    name: "Pedro",
    email: "pedro@gmail.com",
    password: 1234
}

class LoginController {
    async login(req, res) { 
        
        const tokenData = {
            name: user.name,
            email:user.email
        }

        const tokenKey = "12345678"

        const tokenOptions = {
            subject: user.id_user,
            expiresIn: "1h"
        }

        const token = sign( tokenData, tokenKey, tokenOptions )

        res.status(200).send({ token })
    }
}

export default LoginController
