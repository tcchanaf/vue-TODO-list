import { createStore } from 'vuex'

const store = createStore({
    state: {
        user: {
            username: localStorage.getItem('user') == null ? '' : JSON.parse(localStorage.getItem('user' || '[]')).username    
        }
    },
    mutations: {
        login (state, data) {
            state.user = data
            localStorage.setItem('user', JSON.stringify(data))
        }
    }
})

export default store