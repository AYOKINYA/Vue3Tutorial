import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const filters = {
    all: todos => todos,
    incompleted: todos => todos.filter(todo => !todo.completed),
    completed: todos => todos.filter(todo => todo.completed)
}
  
export default function filterTodos(todos) {
    const store = useStore();

    const visible = ref('all');
        
    const cleanTodos = (visible) => store.dispatch('todos/cleanTodos', visible);

    const filteredTodos = computed(() => filters[visible.value](todos.value))
    const setVisibility = (e) => (visible.value = e.target.options[e.target.options.selectedIndex].value)

    return {
        visible,
        cleanTodos,
        filteredTodos,
        setVisibility
    }
}