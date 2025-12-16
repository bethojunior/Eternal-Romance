import { UserEntity } from '@types'
import { inject, injectable } from 'tsyringe'

import UserRepository from './user.repository'

@injectable()
export default class UserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository
  ) {}

  async store(props: any): Promise<UserEntity> {
    return await this.userRepository.store(props)
  }

  async login(props: { email: string; password: string }) {
    const result = await this.userRepository.login(props)

    return result
  }
}
