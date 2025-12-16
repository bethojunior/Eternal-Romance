import { LoginDTO } from '@/@types/dto/auth/login.dto'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import { AtuhRegisterseCase } from './use-cases/auth-regsiter.usecase'


@injectable()
export class AuthRegisterController {
  constructor(
    @inject(AtuhRegisterseCase)
    private readonly registerUseCase: AtuhRegisterseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const dto: LoginDTO = request.body
      const user = await this.registerUseCase.execute(dto)

      return response.status(201).json({ user })
    } catch (error: any) {
      return response.status(400).json({
        message: error.message ?? 'Register failed'
      })
    }
  }
}
