import { Router } from "express";
import LoginController  from "../controllers/controllersLogin.js"

const routerLogin = Router()

const loginUser =  new LoginController()

routerLogin.get("/login", loginUser.login)

export default routerLogin