import { LoginDTO } from '@/@types/dto/auth/login.dto'
import { UserEntity } from '@/@types/user/user.entity'
import { PrismaProvider } from '@/infra/database/prisma/prisma.provider'
import { injectable } from 'tsyringe'

@injectable()
export class AtuhRegisterseCase {
  async execute(props: LoginDTO): Promise<UserEntity> {
    try {
      const user = await PrismaProvider.use(async (prisma) => {
        return await prisma.user.findUnique({
          where: { email: props.email }
        })
      })

      if (user) throw new Error('User already exists')

      const createdUser = await PrismaProvider.use(async (prisma) => {
        return await prisma.user.create({
          data: {
            email: props.email,
            password: props.password
          }
        })
      })

      return createdUser
    } catch (error) {
      throw error
    }
  }
}
