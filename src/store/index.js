import Vue from "vue";
import Vuex from "vuex";
import articleStore from "./articleStore"; 

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articleStore,
  },
});
