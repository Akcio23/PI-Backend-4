import User from '../models/User.js';
import bcrypt from 'bcrypt';
import userSerialaizer from '../serialaizer/userSerialaizer.js'

async function login (req, res) {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user){
        return res.status(401).json({ error: "Invalid credentials" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({ error: "Invalid credentials"})
    }

    const data = userSerialaizer(user)

    return data
}

export default login