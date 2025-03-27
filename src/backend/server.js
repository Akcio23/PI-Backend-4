import routercheckout from './routes/routercheckout.js'
import routerGetUser from './routes/routerGetUser.js'
import conectDataBase from './service/conectionDataBase.js'
import configServer from './service/server.config.js'
import { app } from './service/server.config.js'

import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

//database
conectDataBase()

//routes
app.use('/login', routercheckout)
app.use('/', routerGetUser)

//config server.js
configServer()

export default app
