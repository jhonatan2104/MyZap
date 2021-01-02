import { FireClient as IFireClient } from '@/data/protocols'
import firebase from 'firebase'
import appCertificate from '@/../certificates/google/app.json'

export class FireClient implements IFireClient {
  public fireInstance: IFireClient.FireInstance

  constructor () {
    this.fireInstance = this.init()
  }

  init = (): IFireClient.FireInstance => {
    if (!firebase.apps.length) {
      return firebase.initializeApp(appCertificate)
    }
  }
}
