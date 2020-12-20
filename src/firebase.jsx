import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyC7QpizfBzzwThBFoqXLSb2MfKKfzJHv3Y",
//     authDomain: "twitter-app-725fe.firebaseapp.com",
//     databaseURL: "https://twitter-app-725fe.firebaseio.com",
//     projectId: "twitter-app-725fe",
//     storageBucket: "twitter-app-725fe.appspot.com",
//     messagingSenderId: "908530281677",
//     appId: "1:908530281677:web:3aca634d6d7bd626270d84",
//     measurementId: "G-MFP19L6WZG"
//   };

//   export default firebase;

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7QpizfBzzwThBFoqXLSb2MfKKfzJHv3Y",
    authDomain: "twitter-app-725fe.firebaseapp.com",
    databaseURL: "https://twitter-app-725fe.firebaseio.com",
    projectId: "twitter-app-725fe",
    storageBucket: "twitter-app-725fe.appspot.com",
    messagingSenderId: "908530281677",
    appId: "1:908530281677:web:3aca634d6d7bd626270d84",
    measurementId: "G-MFP19L6WZG"
}
  );

  const db = firebaseApp.firestore();

  export default db;