import firebase from 'firebase'
import { AccountModel } from '@/domain/models'

export const credentialToAccount = (credential: firebase.auth.UserCredential): AccountModel => {
  return {
    name: credential.user.displayName,
    email: credential.user.email,
    uid: credential.user.uid,
    accessToken: ''
  }
}
