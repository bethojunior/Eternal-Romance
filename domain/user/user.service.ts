import { UserEntity } from '@/@types/user/user.entity'
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
}
