import { LoginDTO } from '@/@types/dto/auth/login.dto'
import { UserEntity } from '@/@types/user/user.entity'
import { PrismaProvider } from '@/infra/database/prisma/prisma.provider'
import { injectable } from 'tsyringe'

@injectable()
export class AtuhLoginUseCase {
  async execute(props: LoginDTO): Promise<UserEntity> {
    const user = await PrismaProvider.use(async (prisma) => {
      return await prisma.user.findUnique({
        where: { email: props.email }
      })
    })
      .then((user) => user as UserEntity)
      .catch((error) => {
        throw new Error(error)
      })

    if (!user) throw new Error('User not found')

    return user
  }
}
