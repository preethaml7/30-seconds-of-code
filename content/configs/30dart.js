export default {
  name: '30 seconds of Dart',
  dirName: '30dart',
  repoUrl: 'https://github.com/30-seconds/30-seconds-of-dart',
  snippetPath: 'snippets',
  requirables: [
    'snippet_data/snippets.json',
  ],
  slug: 'dart',
  reducer: 'stdReducer',
  featured: 6,
  isUnlisted: true,
  theme: {
    backColor: '#1b2634',
    foreColor: '#ffffff',
    iconName: 'dart',
  },
  biasPenaltyMultiplier: 1.02,
  tagScores: {
    'list': 5,
    'object': 4,
    'function': 4,
    'string': 3,
    'date': 3,
    'utility': 1,
    'recursion': 1,
    'regexp': 2,
    'math': 1,
    'type': 1,
    'random': 1,
  },
  keywordScores: {
    'reduce': 5,
    'map': 5,
    'list': 4,
    'date': 4,
    'cascade': 4,
    'join': 4,
    'loop': 3,
    'substring': 3,
    'replace': 3,
    'function': 3,
  },
};
