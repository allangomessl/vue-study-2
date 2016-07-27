import Vue from 'vue'
import Components from './components/register'
import Application from './application/application.register'
import store from './application/application.store'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

Components.register()
Application.register()

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
  store
})
