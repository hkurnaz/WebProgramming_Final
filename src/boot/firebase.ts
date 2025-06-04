import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD4DDQpVjh5OtMNeOlRK-Ll2wL--ssISVo',
  authDomain: 'web-final-ae378.firebaseapp.com',
  projectId: 'web-final-ae378',
  storageBucket: 'web-final-ae378.appspot.com',
  messagingSenderId: '812634046502',
  appId: '1:812634046502:web:77e237cf1b1f665a02a6e7',
  measurementId: 'G-Z63H4CQMJV',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default boot(({ app }) => {
  app.config.globalProperties.$db = db;
});

export { db };
