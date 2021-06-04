import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index'
import './plugin/index'

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App),
	router,
	store
}).$mount('#app')