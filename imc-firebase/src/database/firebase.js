import firebase from "firebase";


const firebaseConfig = {
  //config
};

if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

export default firebase;