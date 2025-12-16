import { injectable } from 'tsyringe'

@injectable()
export class UserRepository {
  async findAll() {
    return []
  }
}
