import axios from 'axios'

// define state
const state = {data:null}
const getters = {
    getTodos: (state)=>state.data
}
const actions = {
    GET_TODOS({commit}){
        axios.get('/api/app/index')
        .then(response=>{
            commit('setTodos', response.data.data)
        })
    },
    CREATE_TODO({dispatch}, data){
        axios.post('/api/app/create', data)
        .then(response =>{
            dispatch('GET_TODOS')
        })
    },
    UPDATE_TODO({dispatch}, data){
        axios.put('/api/app/update', data)
        .then(response=>{
            dispatch('GET_TODOS')
        })
    },
    DISMISS_TODO({dispatch}, data){
        if(data.dismiss === true){
            dispatch('GET_TODOS')
        }
    },
    DESTROY_TODO({dispatch}, data){
        axios({
            url :'/api/app/destroy',
            method : 'DELETE', 
            data
        })
        .then(response=>{
            dispatch('GET_TODOS')
        })
    }
}
const mutations = {
    setTodos: (state, payload)=>state.data=payload
}

export default {
    state : state,
    getters : getters,
    actions : actions,
    mutations : mutations
}