import { createStore } from "vuex";

export default createStore({
  state: {
    user_num: null,
  },
  getters: {
    user_num: state => state.user_num,
  },
  mutations: {
    loginUser: (state, user_num) => {
      state.user_num = user_num;
    }
  },
  actions: {},
  modules: {},
});
