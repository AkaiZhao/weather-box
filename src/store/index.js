import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    weathers: []
  }),
  mutations: {
    setWeathers(state, weathers) {
      state.weathers = weathers
    }
  },
})
export default store