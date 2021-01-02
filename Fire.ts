import firebase from 'firebase'

class Fire {
  constructor () {
    this.init()
  }

  init = (): void => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCgH6E-5lFoGUEe1yb7TWlKfWZRjR6SCo0',
        authDomain: 'myzap-ec97b.firebaseapp.com',
        databaseURL: 'https://myzap-ec97b.firebaseio.com',
        projectId: 'myzap-ec97b',
        storageBucket: 'myzap-ec97b.appspot.com',
        messagingSenderId: '596566206496',
        appId: '1:596566206496:web:675cf5d70b0412b1b7b445',
        measurementId: 'G-NJSVY6XK9Y'
      })
    }
  }

  checkAuth = async (user: FireModule.User , successCallback: any, failedCallback: any): Promise<void> => {
    await firebase.auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(successCallback, failedCallback)
  }

  refOn = (callback: Function): void => {
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)))
  }

  refOff = (): void => {
    this.ref.off()
  }

  get ref (): firebase.database.Reference {
    return firebase.database().ref()
  }

  parse = (snapshot: firebase.database.DataSnapshot): FireModule.Message => {
    const { timestamp: numberStamp, text, user } = snapshot.val()
    const { key: _id } = snapshot
    const timestamp = new Date(numberStamp)
    const message = { _id, timestamp, text, user }
    return message
  }

  send = (messages: any): void => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i]
      const message = { text, user, createdAt: firebase.database.ServerValue.TIMESTAMP }
      this.ref.push(message)
    }
  }

  get uid (): string {
    return (firebase.auth().currentUser || {}).uid
  }

  getUserName = (email: string): string => {
    return (firebase.auth().currentUser || {}).displayName
  }

  createAccount = async (user: FireModule.User, successCallback: any, failedCallback: any): Promise<void> => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function () {
      var userCurrent = firebase.auth().currentUser
      userCurrent.updateProfile({ displayName: user.name })
        .then(successCallback, function (): void {
          console.warn('Erro ao adicionar o attr:Name.')
        })
    },
    failedCallback)
  }
}

export namespace FireModule {
  export type User = {
    email: string
    password: string
    name?: string
  }

  export type Message = {
    _id: string
    timestamp: Date
    text: string
    user: any
  }
}

export default new Fire()
