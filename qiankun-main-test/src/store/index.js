import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainData: {}
  },
  mutations: {
    saveMain(state, data) {
      state.mainData = data;
    }
  }
});
