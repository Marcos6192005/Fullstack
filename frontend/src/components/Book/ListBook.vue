<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <h1 class="text-primary">Book List</h1>
        <b-button size="sm" variant="success" :to="{ name: 'NewBook' }" >Add Book</b-button>
        <br /><br />
        <b-table
          striped
          hover
          :items="sortedBills"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          @sort-changed="onSortChanged"
        >
          <template v-slot:cell(actions)="data">
            <b-button
              size="sm"
              variant="primary"
              :to="{ name: 'EditBook', params: { billID: data.item.id } }"
              class="mr-2"
            >
              Edit
            </b-button>
            <b-button
              size="sm"
              variant="danger"
              :to="{ name: 'DeleteBook', params: { billID: data.item.id } }"
            >
              Delete
            </b-button>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      bills: [],
      fields: [
        { key: 'title', label: 'Title', sortable: true },
        { key: 'author', label: 'Author', sortable: true },
        { key: 'description', label: 'Description', sortable: false },
        { key: 'actions', label: 'Actions' }
      ],
      sortBy: 'title',   // columna por defecto para ordenar
      sortDesc: false    // orden ascendente por defecto
    }
  },
  computed: {
    sortedBills() {
      // Ordena la lista localmente en base a sortBy y sortDesc
      if (!this.sortBy) return this.bills
      return this.bills.slice().sort((a, b) => {
        let aVal = a[this.sortBy]
        let bVal = b[this.sortBy]
        if (typeof aVal === 'string') aVal = aVal.toLowerCase()
        if (typeof bVal === 'string') bVal = bVal.toLowerCase()
        if (aVal < bVal) return this.sortDesc ? 1 : -1
        if (aVal > bVal) return this.sortDesc ? -1 : 1
        return 0
      })
    }
  },
  methods: {
    getBills() {
      const path = 'http://172.24.93.44:8000/bill/bills/'
      axios
        .get(path)
        .then(res => {
          this.bills = res.data
        })
        .catch(error => {
          console.error(error)
        })
    },
    onSortChanged(ctx) {
      this.sortBy = ctx.sortBy
      this.sortDesc = ctx.sortDesc
    }
  },
  created() {
    this.getBills()
  }
}
</script>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>
