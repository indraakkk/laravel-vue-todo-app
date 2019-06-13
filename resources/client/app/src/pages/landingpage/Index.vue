<template>
    <div class='container' style="margin: 70px auto">
        <Input v-on:addTodo="createTodo" />
        <List v-bind:datas="lists" />
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
                console.log(response.data.data)
                this.lists = response.data.data
            })
        },
        createTodo(data){
            axios.post('/api/app/create', data)
            .then(response =>{
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

