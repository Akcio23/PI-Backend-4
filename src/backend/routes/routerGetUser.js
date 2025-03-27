import { Router } from 'express'
import UserController from '../controllers/userController.js'
import verifyAuth from '../middleware/verifyAuth.js'

const routerGetUser = Router()

const find = new UserController()

routerGetUser.get('/user', verifyAuth, find.getUser)

export default routerGetUser
