import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChNatBULXNibJD7jXxwYg8ebZ-Bt9Dlfk",
  authDomain: "coderdevreact.firebaseapp.com",
  projectId: "coderdevreact",
  storageBucket: "coderdevreact.appspot.com",
  messagingSenderId: "136631958706",
  appId: "1:136631958706:web:dd09a5911fcfd3a4fbddab"
};

const app = initializeApp(firebaseConfig)

export default function getFirestoreApp(){
    return app
}
