import routercheckout from "./routes/routercheckout.js";
import conectDataBase from "./service/conectionDataBase.js";
import configServer from "./service/server.config.js";
import { app } from "./service/server.config.js";

import dotenv from "dotenv"

dotenv.config({ path: '.env' });

const test = process.env.PORT

//database
conectDataBase()

//routes
app.use('/login', routercheckout)

//config server.js
configServer()

export default app 





