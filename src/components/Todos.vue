<template>
<div class="container">
    <h3>{{name}}'s Todo List</h3>
    <div>
        Filter Todos:
        <select @change.prevent="setVisibility($event)">
            <option value="all">All</option>
            <option value="incompleted">Undone</option>
            <option value="completed">Done</option>
        </select>
    </div>
    <add-todo/>
<div class="todos">
    
    <button @click="cleanTodos(visible)">Remove {{visible}} Todos</button>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div v-for="todo in filteredTodos"
        :key="todo.id"
        class="todo"
        @dblclick="updateTodo(todo)"
        v-bind:class="{'is-complete':todo.completed}">
            {{todo.title}}
        <button @click="removeTodo(todo.id)">DELETE</button>
    </div>
</div>
</div>
    
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import AddTodo from './AddTodo.vue'

const filters = {
  all: todos => todos,
  incompleted: todos => todos.filter(todo => !todo.completed),
  completed: todos => todos.filter(todo => todo.completed)
}

export default {
    name: 'Todos',
    props: {
        name: String
    },
    components: {
        AddTodo,
    },
    
    setup() {

        const visible = ref('all')

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
        const cleanTodos = (visible) => store.dispatch('todos/cleanTodos', visible);

        const filteredTodos = computed(() => filters[visible.value](todos.value))
        const setVisibility = (e) => (visible.value = e.target.options[e.target.options.selectedIndex].value)

        return {
            todos,
            getTodos,
            updateTodo,
            removeTodo,
            cleanTodos,
            visible,
            filteredTodos,
            setVisibility,
        }
    }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>