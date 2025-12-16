import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import UserService from './user.service'

@injectable()
export class AuthController {
  constructor(
    @inject(UserService)
    private userService: UserService
  ) {}

  async handleLogin(request: Request, response: Response): Promise<Response> {
    try {
      // const user = await this.userService.login(request.body)
      return response.status(201).json({ message: 'Login successful' })
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}
