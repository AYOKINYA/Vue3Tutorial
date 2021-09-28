<template>
    <div>
        Add Todo
         <div class="add">
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="title" placeholder="Add Todo...">
            <input type="submit" value="Submit">
        </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'AddTodo',
    setup() {
        
        const store = useStore();

        const title = ref("");
        const onSubmit = () => store.dispatch('todos/addTodo', title.value);

        return {
            title,
            onSubmit
        }
    }
    
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>