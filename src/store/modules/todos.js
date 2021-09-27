import {TODOS} from '../mutation-types'
import TodoService from '../../api/TodoService'

const state = {
    todos : []
}

const getters = {
    completed: state => state.todos.filter(todo => todo.completed),
    incompledted: state => state.todos.filter(todo => !todo.completed)
}

const actions = {
    getTodos({commit}) {
        TodoService.getTodos()
        .then(res => {
            commit(TODOS.SET_TODOS, res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },
    addTodo({commit}, title) {
        TodoService.addTodo({title, completed: false})
        .then(res => {
            commit(TODOS.ADD_TODO, res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },
    removeTodo({commit}, id) {
        commit(TODOS.REMOVE_TODO, id);
    },
    updateTodo({commit}, updatedTodo) {
        commit(TODOS.UPDATE_TODO, updatedTodo);
    },
    cleanTodos({commit}, visible) {
        if (visible == "completed") {
            state.todos.filter(todo => todo.completed)
            .forEach(todo => {
                commit(TODOS.REMOVE_TODO, todo.id)
            });
        } else if (visible == "incompleted") {
            state.todos.filter(todo => !todo.completed)
            .forEach(todo => {
                commit(TODOS.REMOVE_TODO, todo.id)
            });
        } else {
            commit(TODOS.SET_TODOS,[]);
        }
    },
}

const mutations = {
    [TODOS.SET_TODOS](state, todos) {
        state.todos = todos
    },
    [TODOS.ADD_TODO](state, todo) {
        state.todos.push(todo);
    },
    [TODOS.REMOVE_TODO](state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id)
    },
    [TODOS.UPDATE_TODO](state, updatedTodo) {
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updatedTodo);
        }
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
