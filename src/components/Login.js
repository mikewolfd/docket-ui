import React from 'react';
// import firebase from 'firebase';
import firebase from 'config/firebaseconfig.js';

const handleLogin = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword('testuser@gmail.com', 'dumbpass')
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};

function Login() {
  return (
    <div>
      <button id={'loginButton'} onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
