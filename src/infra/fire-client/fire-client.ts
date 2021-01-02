import { FireClient as IFireClient } from '@/data/protocols'
import firebase from 'firebase'
import appCertificate from '@/../certificates/google/app.json'

export class FireClient implements IFireClient {
  public fireInstance: IFireClient.FireInstance

  constructor () {
    this.init()
    this.fireInstance = firebase.app()
  }

  init = (): void => {
    if (!firebase.apps.length) {
      firebase.initializeApp(appCertificate)
    }
  }
}
