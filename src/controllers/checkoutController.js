import pkg from 'jsonwebtoken';
import register  from '../service/userRegister.js'
import login from '../service/userLogin.js';

const { sign } = pkg;

class checkoutController {
    async signin(req, res) { 

        const user =  await login(req, res)
        
        const tokenData = {
            name: user.name,
            email:user.email
        }

        const tokenKey = process.env.KEY 

        const tokenOptions = {
            subject: user._id,
            expiresIn: "1h"
        }

        const token = sign( tokenData, tokenKey, tokenOptions )

        res.status(200).send({ token })
    }

    async signup(req, res){

        register(req, res)
    }
}

export default checkoutController
