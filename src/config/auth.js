import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useContext } from 'react';
import { userContext } from './userContext';

export const useSession = () => {
  const { user } = useContext(userContext);
  return user;
};

export default firebase;
