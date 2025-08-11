<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h1 class="text-primary">Edit Book</h1>
      </div>
    </div>
    <div class="row">
      <div class="col text-left">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="onSubmit">
              <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    id="title"
                    placeholder="Title"
                    class="form-control"
                    name="title"
                    v-model="form.title"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="author" class="col-sm-2 col-form-label">Author</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    id="author"
                    placeholder="Author"
                    class="form-control"
                    name="author"
                    v-model="form.author"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="description" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    id="description"
                    placeholder="Description"
                    class="form-control"
                    name="description"
                    v-model="form.description"
                  />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col text-left">
                  <b-button type="submit" variant="primary">Editar</b-button>
                  <b-button type="submit" class="btn-large-sapace" :to="{ name:'ListBook' }">Cancelar</b-button>
                </div>
              </div>
            </form>
          </div>
        </div>
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
        billID: this.$route.params.billID,
            form: {
                title: '',
                author: '',
                description: ''
            }
        }
    },
    methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const path = `http://172.24.93.44:8000/bill/bills/${this.billID}/`;
      axios.put(path, this.form)
        .then((response) => {
          this.form.title = response.data.title;
          this.form.author = response.data.author;
          this.form.description = response.data.description;
          swal("Libro Actualizado", "Libro Actualizado Correctamente", "success");
          this.$router.push({ name: 'ListBook' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getBook() {
      const path = `http://172.24.93.44:8000/bill/bills/${this.billID}/`;
      axios.get(path)
        .then((res) => {
          this.form.title = res.data.title;
          this.form.author = res.data.author;
          this.form.description = res.data.description;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
    created () {
        this.getBook()
    }
}
</script>

<style lang="css">
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: sans-serif;
}

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    margin-top: 1rem;
}

.card-body {
    padding: 1.5rem;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

.col {
    flex: 1;
    padding: 0.5rem;
}

.text-left {
    text-align: left;
}

.form-group {
    width: 100%;
    margin-bottom: 1.5rem;
}

.col-form-label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    width: 100%;
}

.form-control {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
}

button {
    padding: 0.6rem 1.2rem;
    margin-right: 1rem;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
}

.btn-primary {
    background-color: #007bff;
    color: white;
}

.btn-primary:hover {
    background-color: #0056b3;
}

.btn-large-space {
    background-color: #6c757d;
    color: white;
}

.btn-large-space:hover {
    background-color: #5a6268;
}

</style>
