<template>
    <div class="input-group mb-3">
        <input
            v-model="task"
            type="task"
            class="form-control"
            placeholder="Add new task"
            aria-describedby="basic-addon2"
        >
        <div class="input-group-append">
            <button v-on:click="store" class="btn btn-primary" type="button">Add Task</button>
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
