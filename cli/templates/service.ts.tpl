import { injectable, inject } from 'tsyringe'
import { UserRepository } from './user.repository'

@injectable()
export class UserService {
  constructor(
    @inject(UserRepository)
    private readonly repository: UserRepository
  ) {}

  async findAll() {
    return this.repository.findAll()
  }
}
