import { COUNTER } from '../mutation-types';

const state = {
    count: 0
}

const getters = {
    countInfo: (state) => state.count
}

const actions = {
    increase({commit}) {
        commit(COUNTER.INCREASE);
    },
    decrease({commit}) {
        commit(COUNTER.DECREASE);
    }
}

const mutations = {
    [COUNTER.INCREASE](state) {
        state.count++;
    },
    [COUNTER.DECREASE](state) {
        state.count--;
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}