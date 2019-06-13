import Vue from 'vue'
import routers from './routes.js'
import App from './src/App.vue'
import Default from './src/layouts/Master.vue'
import store from './store/index' 
Vue.component('default-layout', Default);

const app = new Vue({
    store: store, 
    render: h => h(App),
    router: routers
}).$mount('#app')