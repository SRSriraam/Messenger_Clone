 import firebase from 'firebase';

 const firebaseApp =  firebase.initializeApp({

        apiKey: "AIzaSyCFG5XXw6p5FvQClxuVa6taoR88ubhEiec",
        authDomain: "messenger-clone-c4121.firebaseapp.com",
        databaseURL: "https://messenger-clone-c4121.firebaseio.com",
        projectId: "messenger-clone-c4121",
        storageBucket: "messenger-clone-c4121.appspot.com",
        messagingSenderId: "856193327008",
        appId: "1:856193327008:web:507988e7b6f28d8831cec5",
        measurementId: "G-62DP019XRD"
      
 });

 const database =firebaseApp.firestore();

 export default database;