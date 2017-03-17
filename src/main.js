// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import vueRouter from 'vue-router'


Vue.use(ElementUI)
Vue.use(vueRouter)

import login from './components/Login'
import TodoList from './components/TodoList'

const router = new vueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/todolist',
      component: TodoList
    },{
      path: '*',
      redirect: '/'
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  components: { App }
})
