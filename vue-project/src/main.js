import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading/'


Vue.use(VueRouter);
Vue.use(Loading);

const router = new VueRouter({
	mode:'history',
	scrollBehavior: () => ({ y: 0 }),
	routes
})

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});


axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
});

require('./assets/css/css.css');


Vue.prototype.$http = axios;


new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})