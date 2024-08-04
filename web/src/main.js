import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from '@/utils/nprogressConfig'
import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'
import './plugins/filters'
import './plugins/global'
import http from './utils/http'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
