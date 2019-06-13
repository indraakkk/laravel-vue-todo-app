import Vue from 'vue'
import Router from 'vue-router'

// app page
import LandingPage from './src/pages/landingpage/index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/app/home',
            name: 'landingpage',
            component: LandingPage
        }
    ]
})