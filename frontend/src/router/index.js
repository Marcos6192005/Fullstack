import Vue from 'vue'
import Router from 'vue-router'
import Listbook from '@/components/Book/listbook.vue'
import Addbook from '@/components/Book/Editbook.vue'
import EditBook from '../components/Book/EditBook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListBook',
      component: Listbook
    },
    {
      path: '/edit-book/:bookID',
      name: 'EditBook',
      component: EditBook
    }
  ]
})
