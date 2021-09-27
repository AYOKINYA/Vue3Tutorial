import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

class TodoService {
    getTodos() {
        return axios.get(BASE_URL + '?_limit=' + '10');
    }
    addTodo(todo) {
        return axios.post(BASE_URL, todo);
    }

}

export default new TodoService();