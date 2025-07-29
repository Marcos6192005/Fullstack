<template lang="html">
<div>
    <div class="row">
      <div class="col text-left">
        <h1 class="text-primary">Bill List</h1>
        <b-button size="sm" :to="{ name: 'NewBook' }">Add Bill</b-button><br><br>
        <div class="col-md-12">
          <b-table striped hover :items="bills" :fields="fields">
            <template v-slot:cell(actions)="data">
              <b-button size="sm" variant="primary" :to="{ name: 'EditBill', params: { billID: data.item.id } }">Edit</b-button>
              <b-button size="sm" variant="danger" :to="{ name: 'DeleteBill', params: { billID: data.item.id } }">Delete</b-button>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      fields: [
        { key: 'title', label: 'Title', sortable: true },
        { key: 'author', label: 'Author', sortable: true },
        { key: 'description', label: 'Description', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      bills: []
    }
  },
  methods: {
    getBills () {
    const path = 'http://10.185.251.44:8000/bill/bills/'
    axios.get(path)
        .then((res) => {
            this.bills = res.data
        })
        .catch((error) => {
            console.error(error)
        })
    }
    },
    created () {
    this.getBills()
    }
}
</script>

<style scoped>
</style>
