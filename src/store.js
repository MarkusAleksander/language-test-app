import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testComplete: false,
    testScore: 0,
    localData: null,
    current_max_width: 0,
    bg_col_array: [[255, 255, 255], [255, 255, 255], [255, 255, 255]]
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
    },
    setBackgroundColours (state, data) {
      state.bg_col_array = data.colours
    },
    setAppStyle (state, data) {
      state.current_max_width = data.data.width
      state.bg_col_array = data.data.colours
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
        colours: state.bg_col_array,
        width: state.current_max_width
      }
    }
  },
  actions: {

  }
})
