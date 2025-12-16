import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UserService } from '@/core/user/user.service'

export class UserController {
  async index(req: Request, res: Response) {
    const service = container.resolve(UserService)
    const result = await service.findAll()
    return res.json(result)
  }
}
