import express from "express"
import routerLogin from "./routes/routerLogin.js";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"



dotenv.config({ path: '../.env' });
const dbUrl = process.env.DATABASE_URL;
console.log(dbUrl)

mongoose.connect(dbUrl)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

export const app = express()

app.use(cors())
app.use(express.json());
app.use(routerLogin)

const PORT = 3000; 

app.listen(PORT, () => {
    console.log(`Run: ${PORT}`);
});

export default app 


