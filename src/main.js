// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { VueRouter } from 'vue-router'

const router = new VueRouter({
  routes: []
})

Vue.config.productionTip = false

/* eslint-disable no-new */
// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router
}).$mount('#app')
