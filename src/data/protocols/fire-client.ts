import firebase from 'firebase'

export interface FireClient {
  fireInstance: FireClient.FireInstance
  firestore: FireClient.Firestore
  init: () => void
  parseError: (error: firebase.FirebaseError) => string
}

export namespace FireClient {
  export type FireInstance = firebase.app.App
  export type Firestore = firebase.firestore.Firestore
}
