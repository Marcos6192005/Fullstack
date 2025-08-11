<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h1>New Book</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <form @submit="onSubmit">
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Title</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder="Title" class="form-control" name="title" v-model="form.title">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="author" class="col-sm-2 col-form-label">Author</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder="Author" class="form-control" name="author" v-model="form.author">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="description" class="col-sm-2 col-form-label">Description</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder="Description" class="form-control" name="description" v-model="form.description">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col text-left">
                                    <b-button type="submit" variant="primary">Agregar</b-button>
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
import axios from "axios";
import swal from "sweetalert";

export default {
    data() {
        return {
            form: {
            title: "",
            author: "",
            description: ""
                }
            };
        },
methods: {
    onSubmit(evt) {
    evt.preventDefault();
      const path = `http://172.24.93.44:8000/bill/bills/`; // URL sin ID para crear nuevo

    axios
        .post(path, this.form)
        .then((response) => {
          // Puedes resetear el formulario si quieres
            this.form.title = "";
            this.form.author = "";
            this.form.description = "";
            swal("Libro Agregado", "Libro Agregado Correctamente", "success");
            this.$router.push({ name: "ListBook" });
            })
        .catch((error) => {
            console.error(error);
            swal("Error", "No se pudo agregar el libro", "error");
        });
    }
    }
};
</script>

<style lang="css"></style>
