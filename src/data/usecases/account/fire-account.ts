import { Account } from '@/domain/usecases'
import { FireClient } from '@/infra'

export class FireAccount extends FireClient implements Account {
  add = async (params: Account.ParamsAddAccount): Promise<Account.Model> => {
    try {
      await this.fireInstance
        .auth()
        .createUserWithEmailAndPassword(params.email, params.password)

      const userCurrent = this.fireInstance.auth().currentUser

      await userCurrent.updateProfile({ displayName: params.name })

      const userRefDoc = this.firestore.collection('accounts').doc(userCurrent.uid)

      const newAccount = {
        name: params.name,
        email: params.email,
        uid: userCurrent.uid
      }

      await userRefDoc.set(newAccount)

      return newAccount
    } catch (error) {
      throw new Error(super.parseError(error))
    }
  }
}
