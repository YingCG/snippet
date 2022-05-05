import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAVclyFsJKZv72LFiF1k_yFSoQicm8GaGk",
    authDomain: "snippet-9c0e6.firebaseapp.com",
    projectId: "snippet-9c0e6",
    storageBucket: "snippet-9c0e6.appspot.com",
    messagingSenderId: "465277549490",
    appId: "1:465277549490:web:d07007f4b0b048a94802ab",
    measurementId: "G-BM7PEY60CJ"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app)
