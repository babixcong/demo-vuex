import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import firstStore from './modules/first_module/first_store';
import secondStore from './modules/second_module/second_store';

const store = new Vuex.Store({
    modules: {
        first: firstStore,
        second: secondStore,
    }
});

export default store;
