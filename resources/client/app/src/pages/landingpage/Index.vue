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
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'landingpage',
    // begin initial state from vuex
    computed: mapGetters({
        lists: 'getTodos'
    }),
    // data(){
    //     return {
    //         lists: []
    //     }
    // },
    methods: {
        ...mapActions([
            'GET_TODOS',
            'CREATE_TODO',
            'UPDATE_TODO',
            'DISMISS_TODO',
            'DESTROY_TODO'
        ]),
        // getTodo(){
        //     axios.get('/api/app/index')
        //     .then(response=>{
        //         this.lists = response.data.data
        //     })
        // },
        createTodo(data){
        //     axios.post('/api/app/create', data)
        //     .then(response =>{
        //         this.getTodo()
        //     })
            // pass data to action
            this.CREATE_TODO(data)
        },
        updateTodo(data){
            // axios.put('/api/app/update', data)
            // .then(response=>{
            //     this.getTodo()
            // })
            // pass data to action
            this.UPDATE_TODO(data)
        },
        dismissModal(data){
            this.DISMISS_TODO(data)
        },
        destroyTodo(data){
            // axios({
            //     url :'/api/app/destroy',
            //     method : 'DELETE', 
            //     data
            // })
            // .then(response=>{
            //     this.getTodo()
            // })
            // pas data to action
            this.DESTROY_TODO(data)
        }
    },
    created(){
        this.GET_TODOS()
        // this.getTodo(),
    },
    components: {
        Input,
        List
    }
}
</script>

