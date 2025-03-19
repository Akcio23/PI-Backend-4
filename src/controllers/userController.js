import getUser from "../service/getUser.js"

class UserController{

    async getUser(req, res){
        const { email } = req.body
    
        if( !email ){
            return res.status(401).json({
                message: 'email field required'
            })
        }
    
        const user = await getUser( email )
    
        if( !user ){
            return res.status(401).json({
                message: 'user not found'
            })
        }
    
        return res.status(201).json({ user })
    
    }

}

export default UserController

