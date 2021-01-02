import firebase from 'firebase'

export interface FireClient {
  fireInstance: FireClient.FireInstance
  init: () => FireClient.FireInstance
}

export namespace FireClient {
  export type FireInstance = firebase.app.App
}
