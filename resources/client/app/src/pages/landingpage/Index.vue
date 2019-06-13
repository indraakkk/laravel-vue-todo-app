<template>
    <div class='container' style="margin: 70px auto">
        <Input v-on:addTodo="createTodo" />
        <List
            v-bind:datas="lists"
            v-on:deleteTodo="destroyTodo"
            v-on:saveSingleData="updateTodo"
            v-on:dismiss="dismissModal"
        />
    </div>
</template>
<script>
import axios from 'axios'
import Input from './form/Index.vue'
import List from './table/Index.vue'

export default {
    name: 'landingpage',
    data(){
        return {
            lists: []
        }
    },
    methods: {
        getTodo(){
            axios.get('/api/app/index')
            .then(response=>{
                this.lists = response.data.data
            })
        },
        createTodo(data){
            axios.post('/api/app/create', data)
            .then(response =>{
                this.getTodo()
            })
        },
        updateTodo(data){
            axios.put('/api/app/update', data)
            .then(response=>{
                this.getTodo()
            })
        },
        dismissModal(data){
            console.log(data)
            if(data.dismiss === true){
                this.getTodo()
            }
        },
        destroyTodo(data){
            axios({
                url :'/api/app/destroy',
                method : 'DELETE', 
                data
            })
            .then(response=>{
                this.getTodo()
            })
        }
    },
    created(){
        this.getTodo()
    },
    components: {
        Input,
        List
    }
}
</script>

