import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKn9udAB_jTlHqkBW7W-wXjXWkBVmaAQs",
  authDomain: "courtscraper.firebaseapp.com",
  databaseURL: "https://courtscraper.firebaseio.com",
  projectId: "courtscraper",
  storageBucket: "courtscraper.appspot.com",
  messagingSenderId: "349391854426",
  appId: "1:349391854426:web:724223d6327d03b3837163"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// firebase.firestore().settings({});


export default firebase;