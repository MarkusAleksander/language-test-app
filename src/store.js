import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testComplete: false,
    testScore: 0,
    localData: null,
    current_max_width: 0
  },
  mutations: {
    completeTest (state) {
      state.testComplete = true
    },
    updateScore (state, payload) {
      state.testScore += payload.score
    },
    setLocalData (state, data) {
      state.localData = data
    },
    setWidth (state, data) {
      state.current_max_width = data.width
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
    getMaxWidth: state => {
      return state.current_max_width
    }
  },
  actions: {

  }
})
