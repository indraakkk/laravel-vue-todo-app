<template>
    <div class="container mb-3">
        <div class="row">
            <div class="col-9">
                <input
                    v-model="task" 
                    type="task"
                    class="form-control"
                    placeholder="Add new task"
                >
            </div>
            <div class="col-3">
                <button v-on:click="store" class="btn btn-primary">Add task</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'forminput',
    data(){
        return {
            task: null
        }
    },
    methods:{
        store(){
            const store = { text: this.task }
            this.$emit('addTodo', store)
            this.task = null
        }
    }
}
</script>
