export type UserState = {
  id: number
  name: string
  email: string
}

export type UserEntity = UserState & {
  password: string
}
