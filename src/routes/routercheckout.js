import { Router } from "express";
import ckeckoutController  from "../controllers/controllersLogin.js"

const  routercheckout = Router()

const checkout =  new ckeckoutController()

routercheckout.get("/signin", checkout.signin)

export default routercheckout