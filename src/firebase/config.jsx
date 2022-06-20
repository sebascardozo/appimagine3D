
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCfBId_kb0DjQNnlDEEpSRLKwh5Vq1F8gA",
  authDomain: "appimagine3d.firebaseapp.com",
  projectId: "appimagine3d",
  storageBucket: "appimagine3d.appspot.com",
  messagingSenderId: "877286158416",
  appId: "1:877286158416:web:cd6474aa69b47fa88f6155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function getFirestoneApp (){
    return app
}
