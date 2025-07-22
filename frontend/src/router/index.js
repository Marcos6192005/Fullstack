import Vue from 'vue'
import Router from 'vue-router'
import Listbook from '../components/Book/listbook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListBook',
      component: Listbook
    }
  ]
})
