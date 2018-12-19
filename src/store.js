import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testComplete: false,
    testScore: 0
  },
  mutations: {
    completeTest (state) {
      state.testComplete = true
    },
    updateScore (state, payload) {
      state.testScore += payload.score
    }
  },
  actions: {

  }
})
