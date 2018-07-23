// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false


var instance = axios.create({
    baseURL:  'http://localhost:3000',
    timeout: 8000,
    headers: {
        'clientType': 'CUSTOMER_H5',
    }
});
Vue.prototype.$http = instance;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
