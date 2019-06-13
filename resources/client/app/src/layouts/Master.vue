<template>
    <div class="container-fluid">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from './Navbar'
export default {
    name: 'Index',
    components: {
        Navbar
    }
}
</script>
