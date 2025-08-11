<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col text-left">
        <h2>¿Estás seguro que deseas eliminar el libro?</h2>
        <p><strong>Título:</strong> {{ element.title }}</p>
        <p><strong>Autor:</strong> {{ element.author }}</p>
        <p><strong>Descripción:</strong> {{ element.description }}</p>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col text-left">
        <b-button variant="danger" @click="deleteBook">Eliminar</b-button>
        <b-button variant="secondary" @click="cancelDelete" class="ml-2">Cancelar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  data() {
    return {
      bookID: this.$route.params.billID, // <- tu param correcto
      element: {
        title: '',
        author: '',
        description: ''
      }
    };
  },
  methods: {
    getBook() {
      const path = `http://172.24.93.44:8000/bill/bills/${this.bookID}/`;
      axios.get(path)
        .then((res) => {
          this.element = res.data; // ✅ Aquí llenas los datos correctamente
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteBook() {
      const path = `http://172.24.93.44:8000/bill/bills/${this.bookID}/`;
      axios.delete(path)
        .then(() => {
          swal("Libro Eliminado", "Libro eliminado correctamente", "success");
          this.$router.push({ name: 'ListBook' });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  created() {
    this.getBook();
  }
};
</script>


<style lang="css">
</style>