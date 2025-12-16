import { AuthLoginController } from '@/core/auth/login/auth-login.controller'
import { AuthRequest } from '@/src/http/request/auth/auth.request'
import { Router } from 'express'
import { container } from 'tsyringe'

const authRouter = Router()

const authController = container.resolve(AuthLoginController)
authRouter.post('/auth/login', AuthRequest, authController.handle.bind(authController))

export { authRouter }
