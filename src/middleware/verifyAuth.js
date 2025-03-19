import pkg from "jsonwebtoken"

const { verify} = pkg

const key = process.env.key || "12345678"

function verifyAuth( req, res, next){
    const authToken = req.headers.authorization

    if (authToken){
        const [, token] = authToken.split(' ')

        try{ 
            const { sub } = verify( token, key )
            console.log( 'Token for user: ', sub )
            return next()
        }catch (err){
            return  res.status(401).json({
                message: "Unauthorized"
            })
        }
    }

    return  res.status(401).json({
                message: "Unauthorized"
    })
}

export default verifyAuth