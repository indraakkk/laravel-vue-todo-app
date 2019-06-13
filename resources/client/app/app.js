import Vue from 'vue'
import routers from './routes.js'
import App from './src/App.vue'
import Default from './src/layouts/Master.vue'

Vue.component('default-layout', Default);

const app = new Vue({
    render: h => h(App),
    router: routers
}).$mount('#app')