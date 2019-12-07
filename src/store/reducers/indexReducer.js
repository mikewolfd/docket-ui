import loginReducer from './loginReducer';
import  { combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';


const IndexReducer = combineReducers ({
    login : loginReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default IndexReducer;