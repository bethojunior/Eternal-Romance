import { LoginDTO } from '@/@types/dto/auth/login.dto'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import { AtuhLoginUseCase } from './use-cases/auth-login.usecase'

@injectable()
export class AuthLoginController {
  constructor(
    @inject(AtuhLoginUseCase)
    private readonly loginUseCase: AtuhLoginUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const dto: LoginDTO = request.body
      const user = await this.loginUseCase.execute(dto)

      return response.status(200).json({ user })
    } catch (error: any) {
      return response.status(400).json({
        message: error.message ?? 'Login failed'
      })
    }
  }
}
