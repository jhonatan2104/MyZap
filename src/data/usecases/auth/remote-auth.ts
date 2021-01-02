import { Auth } from '@/domain/usecases'
import { FireClient } from '@/infra'
import { credentialToAccount } from '@/data/adapters'

export class RemoteAuth extends FireClient implements Auth {
  auth = async (params: Auth.Params): Promise<Auth.Model> => {
    return new Promise((resolve, reject) => {
      this.fireInstance
        .auth()
        .signInWithEmailAndPassword(params.email, params.password)
        .then((result) => {
          resolve(credentialToAccount(result))
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
