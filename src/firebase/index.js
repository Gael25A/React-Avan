// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";


const vapidKey = "BMK-NaJ8XDjpHGuOkJWbpr-b22c8dF1WjC7Zl68OdVE5JqAtW35ik3xhRLZEpaFsSHmHiIpOt6SGkQmZOeM4yRc"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS-R4b9lmUD84bXwAIBLYeg7WlIzLK1uE",
  authDomain: "fir-shopping-420e4.firebaseapp.com",
  projectId: "fir-shopping-420e4",
  storageBucket: "fir-shopping-420e4.appspot.com",
  messagingSenderId: "711569343135",
  appId: "1:711569343135:web:3912c4e6345185ea1cd8aa"
};

// currentToken = "fenO_DPe-x3s7y-QZmvauh:APA91bFjpdeF0IjPxJI6fhnGyXkzJvA-_xIFbGnbnkjDZ4BTNY5Cp9-OQ-F78OXCBJT-NS784-e4poIRD0xwxEjH_wMWWTDNqi5WXL05l2dWkbNp4kG9MpI2I8rpFU7uteuKpoWUX2b3";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
getToken(messaging, { vapidKey }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    // console.log('currentToken', currentToken);
    sendTokenToServer(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

const sendTokenToServer = token => {
  if (localStorage.getItem('tokenSentToServer')) return;
  // TO-DO: Implementar la lógica de que en el servidor se almacene el token
  localStorage.setItem('tokenSentToServer', '1');
}

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
