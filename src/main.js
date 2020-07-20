import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)

new Vue({
  el: '#app',
  render: h => h(App)
})
