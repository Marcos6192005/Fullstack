<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>¿Estas seguro que desea eliminar el libro?</h2>
                <p>Titulo: {{ this.element.title }}</p>
                <p>Titulo: {{ this.element.author }}</p>
                <p>Titulo: {{ this.element.description }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col tect-left">
                <b-button type="submit" variant="primary">Eliminar</b-button>
                <b-button type="submit" class="btn-large.space" :to="{ name: 'ListBook' }">Cancelar</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios' ;
import swal from 'sweetalert' ;
export default {
    data() {
        return {
            bookID: this.$route.params.book,
            element: {
                title: '',
                author: '',
                description: ''
            }
        }
    },
    methods: {
        getBook() {
            const path = `http://10.185.251.44:8000/bill/bills/${this.billID}/`
            axios.get(path).then((res) => {
                this.element.title
                this.element.author
                this.element.description
            })
            .catch((error) => {
                console.log(error)
            })
    }
},
created() {
        this.getBook()
    },
    DeleteBook () {
        const path = `http://10.185.251.44:8000/bill/bills/${this.billID}/`
        axios.delete(path).then(() => {
            swal("Libro Eliminado", "Libro Eliminado Correctamente", "success");
            this.$router.push({ name: 'ListBook' })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}   
</script>

<style lanf="css">
</style>