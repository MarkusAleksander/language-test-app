import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testComplete: false,
    testScore: 0,
    localData: null,
    current_max_width: 0,
    bg_col_1: '#00C9FF',
    bg_col_2: '#92FE9D',
    bg_col_3: '#92FE9D'
  },
  mutations: {
    completeTest(state) {
      state.testComplete = true
    },
    updateScore(state, payload) {
      state.testScore += payload.score
    },
    setLocalData(state, data) {
      state.localData = data
    },
    setWidth(state, data) {
      state.current_max_width = data.width
    },
    setBackgroundColours(state, data) {
      for (let i = 1; i <= 3; i++) {
        state[`bg_col_${i}`] = data.colour[i - 1];
      }
    },
    setAppStyle(state, data) {
      state.current_max_width = data.data.width;
      for (let i = 1; i <= 3; i++) {
        state[`bg_col_${i}`] = data.data.colours[i - 1];
      }
    }
  },
  getters: {
    getLanguages: state => {
      return state.localData.data.languages
    },
    getTerms: state => {
      return state.localData.data.terms
    },
    getTranslations: state => {
      return state.localData.data.translations
    },
    getAppStyle: state => {
      return {
        colours: [state.bg_col_1, state.bg_col_2, state.bg_col_3],
        width: state.current_max_width
      };
    }
  },
  actions: {

  }
})
