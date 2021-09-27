import { computed } from 'vue'
import { useStore } from 'vuex'

export default function calcCount() {
    const store = useStore();
        
    const count = computed(() => store.state.counter.count);
    const increment = () => store.dispatch('counter/increase');
    const decrement = () => store.dispatch('counter/decrease');

    return {
        count,
        increment,
        decrement
    }
}