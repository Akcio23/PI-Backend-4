import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({ path: '../../.env' });
const dbUrl = process.env.DATABASE_URL || 'mongodb+srv://PI-user-admin:samuelgostoso123@cluster0.dzi1v.mongodb.net/pi'

const conectDataBase = () =>{
    mongoose.connect(dbUrl)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
}

export default conectDataBase