import { createStore } from "vuex";

export default createStore({
  state: {
    data: [],
  },
  getters: {},
  mutations: {
    // getData(state) {
    //   async function getJson() {
    //     const jsonData = "./json/data.json";
    //     const res = await fetch(jsonData);
    //     state.data = await res.json();
    //   }
    //   getJson();
    // },
  },
  actions: {},
  modules: {},
});
