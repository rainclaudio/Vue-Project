import Vue from "vue";
import Vuex from "vuex";
import articleStore from "./articleStore"; // Make sure this import path is correct

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articleStore,
  },
});
