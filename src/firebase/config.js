import { initializeApp } from '@firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCpXY9Uqnhz83ego69MeTN9EYgL1QOh2kM',
  authDomain: 'delivery-app-b3d9f.firebaseapp.com',
  projectId: 'delivery-app-b3d9f',
  storageBucket: 'delivery-app-b3d9f.appspot.com',
  messagingSenderId: '423111518802',
  appId: '1:423111518802:web:3b5f5b7a5794da46950d8b',
  databaseURL: 'https://delivery-app-b3d9f.firebaseio.com',
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
