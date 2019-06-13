<template>
    <div class="container">
        <ul class="list-group">
            <li 
                v-for="(data, index) in datas"
                v-bind:key="index"
                class="list-group-item">
                {{data.text}}
                <span class="float-right">
                    <button v-on:click="getSingleData(data)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
                    <button v-on:click="destroy(data.id)" class="btn btn-danger">Delete</button>
                </span>

            </li>
        </ul>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <input
                    v-model="singleData.text"
                    type="task"
                    class="form-control"
                    placeholder="Add new task"
                    aria-describedby="basic-addon2"
                >
            </div>
            <div class="modal-footer">
                <button v-on:click="dismiss()" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button v-on:click="saveSingleData(singleData)" type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'listtodo',
    props: [
        'datas'
    ],
    data(){
        return {
            singleData: {}
        }
    },
    methods:{
        getSingleData(data){
            this.singleData = data
        },
        dismiss(){
            const state = { dismiss: true}
            this.$emit('dismiss', state)
        },
        saveSingleData(data){
            const saveSingleData = data
            this.$emit('saveSingleData', saveSingleData)
            
        },
        destroy(id){
            const destroy = {id: id}
            this.$emit('deleteTodo', destroy)
        }
    }
}
</script>
