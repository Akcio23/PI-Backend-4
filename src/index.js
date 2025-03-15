import express from "express"
import routerLogin from "./routes/routerLogin.js";

export const app = express()

app.use(express.json());
app.use(routerLogin)

const PORT = 3000; 


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

export default app 