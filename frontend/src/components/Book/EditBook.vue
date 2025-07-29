<templete lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h1>Edit Book</h1>
            </div>
        </div>
        <div class="row">
            <div class="col text-left">
                <div class="card">
                    <div class="card-body">
                        <form @submit==onSubmit>
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">title</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder="Title" class="form-control" name="title" v-model="form.title">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="author" class="col-sm-2 col-form-label">author</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder="author" class="form-control" name="author" v-model="form.title">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="desciption" class="col-sm-2 col-form-label">description</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder="description" class="form-control" name="description" v-model="form.title">
                                </div>
                            </div>
                            <div class="rows">
                                <div class="col text-left">
                                    <b- button type="submit" variant="primary">Editar</b- button>
                                    <b- button type="submit"class="btn-large-space":to="{ name: 'ListBook' }">Cancelar </b- button>
                                    
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</templete>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    data() {
        return {
        billID: this.$route.params.billID,
            from: {
                title: '',
                author: '',
                description: ''
            }
        }
    },
    methods: {
        onSubmit (evt) {
            evt.preventDefault ()
            const path = `http://172.24.93.44:8000/bill/bills/${this.billID}/`
            axios.put(path, this.form)
            .then((response) => {
                this.form.title = response.data.title
                this.$router.author = response.data.author
                swal("Libro Actualizado", "Libro Actualizado Correctamente", "success");
                this.$router.push({name: 'ListBook'})
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    getBook () {
        const path = `http://172.24.93.44:8000/bill/bills/${this.billID}/`
        axios.get(path).then((res) => {
            this.form.title = res.data.title
            this.form.author = res.data.author
            this.form.description = res.data.description
        })
        .catch((error) => {
            console.log(error)
        })
    },
    created () {
        this.getBook()
    }
}
</script>

<style lang="css">
</style>
