import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
=======
import axios from 'axios'
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from "vuex"
import {bus} from "./assets/API/bus"
axios.defaults.baseURL="http://127.0.0.1:8080";
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios
const conLogin='';
// Vue.prototype.conLogin = conLogin;
Vue.prototype.bus=bus;
Vue.use(ElementUi);
Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    kid:0,
    imgServeUrl:'http://127.0.0.1:8080/'
  },
  getters:{
    getState(state){
      return state;
    }
  },
  mutations:{
    revHot(state,data){
    state.kid=data.kid;
  }}
})
;
// Vue.config.productionTip = false
var t1=new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
>>>>>>> update df
