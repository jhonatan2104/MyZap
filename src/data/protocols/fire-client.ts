import firebase from 'firebase'

export interface FireClient {
  fireInstance: FireClient.FireInstance
  init: () => void
  parseError: (error: firebase.FirebaseError) => string
}

export namespace FireClient {
  export type FireInstance = firebase.app.App
}
