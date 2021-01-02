import firebase from 'firebase'

export interface FireClient {
  fireInstance: FireClient.FireInstance
  init: () => void
}

export namespace FireClient {
  export type FireInstance = firebase.app.App
}
