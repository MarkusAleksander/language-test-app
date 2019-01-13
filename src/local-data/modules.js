const moduleData = [
  {
    'id': 1,
    'language_id': 1,
    'modules': {
      0: {
        'id': 0,
        'title': 'introduction'
      },
      1: {
        'id': 1,
        'title': 'greetings'
      },
      2: {
        'id': 2,
        'title': 'numbers'
      },
      3: {
        'id': 3,
        'title': 'introduction to verbs'
      }
    },
    'module_structure': {
      0: [0],
      1: [1, 2],
      2: [3]
    }
  },
  {
    'id': 2,
    'language_id': 2,
    'modules': {
      0: {
        'id': 0,
        'title': 'introduction'
      },
      1: {
        'id': 1,
        'title': 'greetings'
      },
      2: {
        'id': 2,
        'title': 'introduction to nouns'
      },
      3: {
        'id': 3,
        'title': 'introduction to verbs'
      }
    },
    'module_structure': {
      0: [0],
      1: [1],
      2: [2, 3]
    }
  }
]

export default moduleData
