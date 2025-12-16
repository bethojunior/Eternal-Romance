import { UserEntity } from '@/@types/user/user.entity'
import { injectable } from 'tsyringe'
import { PrismaProvider } from '../../infra/database/prisma/prisma.provider'

@injectable()
export default class UserRepository {
  async store(props: UserEntity): Promise<UserEntity> {
    return props
  }

  async login(props: { email: string; password: string }) {
    return props
  }

  async findAll() {
    try {
      return await PrismaProvider.use(async (prisma) => {
        return await prisma.user.findMany()
      })
    } catch (error) {
      throw new Error('Error finding all users: ' + error)
    }
  }
}
