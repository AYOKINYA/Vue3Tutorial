import { createStore } from 'vuex';
import counter from './modules/counter';
import todos from './modules/todos';

export const store = createStore({
    modules: {
        counter,
        todos
    }
});