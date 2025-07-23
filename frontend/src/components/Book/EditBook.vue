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
            const path = `http://10.185.251.44:8000/bill/bills/${this.billID}/`
            axios.put(path, this.form)
            .then((res) => {
                this.$router.push({name: 'ListBook'})
                swal("Libro Actualizado", "Libro Actualizado Correctamente", "success");
                
            })
            .catch((error) => {
                console.log(error)
            }
            
        )

        }
    }
}
</script>

<style lang="css">
</style>
