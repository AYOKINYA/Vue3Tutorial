import { computed } from 'vue'
import { useStore } from 'vuex'

  
export default function CRUDTodos() {
    const store = useStore();

    const getTodos = store.dispatch('todos/getTodos');
    const todos = computed(() => store.state.todos.todos);
    const updateTodo = (todo) => {
        const upTodo = {
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
        };
        store.dispatch('todos/updateTodo', upTodo);
    }
    const removeTodo = (id) => store.dispatch('todos/removeTodo', id);

    return {
        todos,
        getTodos,
        updateTodo,
        removeTodo,
    }
}