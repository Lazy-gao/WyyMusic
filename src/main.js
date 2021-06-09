import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index'
import './plugin/index'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
