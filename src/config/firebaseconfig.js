  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTnPj07Yv5h76HjFp6_sYJ90ESP9smxAY",
    authDomain: "court-scraper.firebaseapp.com",
    databaseURL: "https://court-scraper.firebaseio.com",
    projectId: "court-scraper",
    storageBucket: "court-scraper.appspot.com",
    messagingSenderId: "240598763698",
    appId: "1:240598763698:web:6fc0e676602d0215bba1ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  // firebase.firestore().settings({});


  export default firebase;