import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

//////////////////////////////firebase///////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYukM4xQi00kDooeUvuVwQi3v9B-9ZgFk",
  authDomain: "ionic-bff40.firebaseapp.com",
  projectId: "ionic-bff40",
  storageBucket: "ionic-bff40.appspot.com",
  messagingSenderId: "136348950637",
  appId: "1:136348950637:web:2f049ebcc5437a840b1f64"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
///////////////////////////////////////////////////////////////////////

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appfirebase);
  
router.isReady().then(() => {
  app.mount('#app');
});
