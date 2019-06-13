<template>
    <div class="container">
        <ul class="list-group">
            <li 
                v-for="(data, index) in datas"
                v-bind:key="index"
                class="list-group-item">
                {{data.text}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'listtodo',
    props: [
        'datas'
    ],
    // created(){
    //     console.log(this.datas)
    // }
}
</script>
