import { Account } from '@/domain/usecases'
import { FireClient } from '@/infra'
import { makeUuid } from '@/data/factories/uuid-factory'

export class FireAccount extends FireClient implements Account {
  add = async (params: Account.ParamsAddAccount): Promise<Account.Model> => {
    try {
      await this.fireInstance
        .auth()
        .createUserWithEmailAndPassword(params.email, params.password)

      const userCurrent = this.fireInstance.auth().currentUser

      await userCurrent.updateProfile({ displayName: params.name })

      const uuid = makeUuid('ACC')

      const userRefDoc = this.firestore.collection('accounts').doc(uuid)

      const newAccount = {
        name: params.name,
        email: params.email,
        uid: uuid
      }

      await userRefDoc.set(newAccount)

      return newAccount
    } catch (error) {
      throw new Error(super.parseError(error))
    }
  }
}
