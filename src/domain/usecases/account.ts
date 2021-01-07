import { AccountModel } from '@/domain/models'

export interface Account {
  add: (params: Account.ParamsAddAccount) => Promise<Account.Model>
}

export namespace Account {
  export type ParamsAddAccount = {
    name: string
    email: string
    password: string
  }

  export type Model = AccountModel
}
