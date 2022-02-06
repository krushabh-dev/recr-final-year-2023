import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSUIkGu22B1TC_Fp4tfIvpTGQXsRMFVyg",
  authDomain: "bagcampus-eresume.firebaseapp.com",
  databaseURL:
    "https://bagcampus-eresume-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bagcampus-eresume",
  storageBucket: "bagcampus-eresume.appspot.com",
  messagingSenderId: "1033936942597",
  appId: "1:1033936942597:web:9928b4b8ba7d9eb32ace6c",
  measurementId: "G-57P12NB320",
};


// Initialize Firebase
const fire = initializeApp(firebaseConfig);

const analytics = getAnalytics(fire);

export { fire, analytics };

