import routercheckout from "./routes/routercheckout.js";
import conectDataBase from "./service/conectionDataBase.js";
import configServer from "./service/server.config.js";
import { app } from "./service/server.config.js";

//database
conectDataBase()

//routes
app.use('/login', routercheckout)

//config server.js
configServer()

export default app 





