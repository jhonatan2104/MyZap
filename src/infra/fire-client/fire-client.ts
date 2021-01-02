import { FireClient as IFireClient } from '@/data/protocols'
import firebase from 'firebase'
import appCertificate from '@/../certificates/google/app.json'

export abstract class FireClient implements IFireClient {
  public fireInstance: IFireClient.FireInstance

  constructor () {
    this.init()
    this.fireInstance = firebase.app()
  }

  init (): void {
    if (!firebase.apps.length) {
      firebase.initializeApp(appCertificate)
    }
  }

  parseError (error: firebase.FirebaseError): string {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Email Inválido'
      case 'auth/user-disabled':
        return 'Usuário Desabilitado'
      case 'auth/user-not-found':
        return 'Usuário não encontrado'
      case 'auth/wrong-password':
        return 'Senha Incorreta'
      default:
        return 'Error'
    }
  }
}
