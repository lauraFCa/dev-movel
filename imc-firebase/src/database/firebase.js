import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyA0aJZfor80yZ6fkWxZlMnC_XrDI5HUBQA",
  authDomain: "devmovem-final.firebaseapp.com",
  projectId: "devmovem-final",
  storageBucket: "devmovem-final.appspot.com",
  messagingSenderId: "781338308898",
  appId: "1:781338308898:web:4fdbdb8ca7a5d1f840757b"
};

if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

export default firebase;