import pkg from 'jsonwebtoken';
import register  from '../service/userRegister.js'
import login from '../service/userLogin.js';
import getUserData from '../utils/getUserData.js';


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

        const params = {
            email: user.email
        }

        const data = await getUserData(token, params) // Makes a request on the user route, passing token and email as parameters to return all user data
        
        res.status(200).send({ data, token })
    }

    async signup(req, res){

        register(req, res)
    }
}

export default checkoutController
