import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testComplete: false,
    testScore: 0,
    localData: null
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
    }
  },
  actions: {

  }
})
