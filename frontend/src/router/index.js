import Vue from 'vue'
import Router from 'vue-router'
import Listbook from '@/components/Book/listbook.vue'
import EditBook from '@/components/Book/EditBook.vue'
import DeleteBook from '@/components/Book/DeleteBook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListBook',
      component: Listbook
    },
    {
      path: '/books/:bookId/edit',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/books/:bookId/delete',
      name: 'ListBook',
      component: DeleteBook
    },
  ]
})
