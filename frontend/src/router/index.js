import Vue from 'vue'
import Router from 'vue-router'
import ListBook from '@/components/Book/ListBook.vue'
import NewBook from '@/components/Book/NewBook.vue'
import EditBook from '@/components/Book/EditBook.vue'
import DeleteBook from '@/components/Book/DeleteBook.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',  // para URLs limpias sin #
  routes: [
    {
      path: '/',
      name: 'ListBook',   // aquí usé 'BillList' para que coincida con tus botones y métodos
      component: ListBook
    },
    {
      path: '/new',
      name: 'NewBook',
      component: NewBook
    },
    {
      path: '/edit/:billID',
      name: 'EditBook',
      component: EditBook,
      props: true  // para pasar el parámetro como prop
    },
    {
      path: '/delete/:billID',
      name: 'DeleteBook',
      component: DeleteBook,
      props: true
    }
  ]
})
