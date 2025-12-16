import { AuthRequest } from '../http/request/auth/auth.request'
import { AuthController } from '../../core/auth/auth.controller'
import { Router } from 'express'
import { container } from 'tsyringe'

const authRouter = Router()

const authController = container.resolve(AuthController)

authRouter.post('/login', AuthRequest, authController.handleLogin.bind(authController))

export { authRouter }
