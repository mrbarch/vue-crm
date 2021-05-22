import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import currencyFilter from '@/filters/currency.filter'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from "@/components/app/Loader";
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: "AIzaSyBnQQ4IF06uDWnPKegz57gnNa7EYdi1hew",
  authDomain: "vue-crm-dcf0b.firebaseapp.com",
  projectId: "vue-crm-dcf0b",
  storageBucket: "vue-crm-dcf0b.appspot.com",
  messagingSenderId: "1056436582977",
  appId: "1:1056436582977:web:dbcdd94ef2c16d4ffc24c0",
  measurementId: "G-0LEGRL4B47"
};

firebase.initializeApp(firebaseConfig);
let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});

