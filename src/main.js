import Vue from 'vue'
import firebase from 'firebase/app'
import App from './App.vue'
// import store from '@/store'
import store from '@/fb_store'

Vue.config.productionTip = false

// TODO Firebase settings
var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}
firebase.initializeApp(config)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
