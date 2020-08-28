module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'arrow-parens': 2,
    'brace-style': [
      2,
      'stroustrup'
    ],
    curly: 2,
    indent: [
      2,
      2
    ],
    'max-len': 2,
    'newline-per-chained-call': [
      2,
      {
        ignoreChainWithDepth: 1
      }
    ],
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    quotes: [
      2,
      'single'
    ],
    semi: 2
  }
};
