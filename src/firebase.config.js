import {getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBslJo5x17kpWokRwX0FqGB7DGwGAtU2NU",
    authDomain: "foodapp-22eaf.firebaseapp.com",
    databaseURL: "https://foodapp-22eaf-default-rtdb.firebaseio.com",
    projectId: "foodapp-22eaf",
    storageBucket: "foodapp-22eaf.appspot.com",
    messagingSenderId: "905748891262",
    appId: "1:905748891262:web:c4542581a6e01ee21bfa2f"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage };