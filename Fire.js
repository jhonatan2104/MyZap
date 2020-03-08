import firebase from 'firebase';
import {Alert} from 'react-native'

class Fire {
    constructor() {
        this.init()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCgH6E-5lFoGUEe1yb7TWlKfWZRjR6SCo0",
                authDomain: "myzap-ec97b.firebaseapp.com",
                databaseURL: "https://myzap-ec97b.firebaseio.com",
                projectId: "myzap-ec97b",
                storageBucket: "myzap-ec97b.appspot.com",
                messagingSenderId: "596566206496",
                appId: "1:596566206496:web:675cf5d70b0412b1b7b445",
                measurementId: "G-NJSVY6XK9Y"
            });
        }
    };

    checkAuth = async (user, success_callback, failed_callback) => {
        await firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
                .then(success_callback, failed_callback);
    };

    refOn = callback => {
        this.ref
          .limitToLast(20)
          .on('child_added', snapshot => callback(this.parse(snapshot)));
    };

    refOff = () => {
      this.ref.off();
    }

    get ref() {
      return firebase.database().ref();
    }

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {_id, timestamp, text, user};
        return message;
    };

    send = messages => {
        for (let i = 0; i < messages.length; i++) {
          const { text, user } = messages[i];
          const message = {text, user, createdAt: firebase.database.ServerValue.TIMESTAMP, };
          this.ref.push(message);
        }
      };

    get uid() {
      return (firebase.auth().currentUser || {}).uid;
    }

    getUserName = email => {
      return (firebase.auth().currentUser || {}).displayName;
    }

    createAccount = async (user, success_callback, failed_callback) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function() {
            var userf = firebase.auth().currentUser;
            userf.updateProfile({ displayName: user.name}).then(success_callback, function(error) {
              console.warn("Erro ao adicionar o attr:Name.");
            });
          },
           failed_callback);
    }
}

export default new Fire();