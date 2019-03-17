import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testComplete: false,
    testScore: 0,
    localData: null,
    current_max_width: 0,
    bg_col_array: [[255, 255, 255], [255, 255, 255], [255, 255, 255]],
    selected_language: '',
    module_data: {
      modules: [
        {
          id: 0,
          lang_id: 1,
          title: 'Greetings'
        },
        {
          id: 1,
          lang_id: 2,
          title: 'Greetings'
        },
        {
          id: 2,
          lang_id: 1,
          title: 'The Alphabet'
        },
        {
          id: 3,
          lang_id: 2,
          title: 'The Alphabet'
        },
        {
          id: 4,
          lang_id: 1,
          title: 'Numbers'
        },
        {
          id: 5,
          lang_id: 2,
          title: 'Numbers'
        }
      ]
    }
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
      state.bg_col_array = data.colours
    },
    setAppStyle(state, data) {
      state.current_max_width = data.data.width
      state.bg_col_array = data.data.colours
    },
    setLanguage(state, data) {
      state.selected_language = data.language
    },
    setModuleData(state, data) {
      state.module_data = data.data
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
    },
    getSelectedLanguage: state => {
      return state.selected_language
    },
    getModuleData: state => {
      return state.module_data
    }
  },
  actions: {

  }
})
