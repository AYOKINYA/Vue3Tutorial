<template>
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
    
</template>

<script>

import AddTodo from './AddTodo'
import filterTodos from '../../composables/filterTodos'
import CRUDTodos from '../../composables/CRUDTodos'

export default {
    name: 'Todos',
    props: {
        name: String
    },
    components: {
        AddTodo,
    },
    
    setup() {

        const {todos, getTodos, updateTodo, removeTodo} = CRUDTodos();

        const {visible, cleanTodos, filteredTodos, setVisibility} = filterTodos(todos);

        return {
            todos,
            getTodos,
            updateTodo,
            removeTodo,

            visible,
            cleanTodos,
            filteredTodos,
            setVisibility
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

select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>