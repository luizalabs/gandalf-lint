module.exports = {
  extends: [
    'eslint-config-standard'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prefer-destructuring': [
      'error',
      {
        'array': true,
        'object': true
      },
      {
        'enforceForRenamedProperties': false
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'prefer-template': 'error',
    'template-curly-spacing': [
      'error',
      'never'
    ],
    'no-eval': 'error',
    'no-useless-escape': 'error',
    'func-style': [
      'off',
      'expression'
    ],
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false
      }
    ],
    'prefer-rest-params': 'error',
    'no-new-func': 'error',
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'space-before-blocks': 'error',
    'no-param-reassign': 'error',
    'prefer-spread': 'error',
    'function-paren-newline': [
      'error',
      'always'
    ],
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': [
      'error',
      'always'
    ],
    'arrow-body-style': [
      'error',
      'always'
    ],
    'no-confusing-arrow': 'error',
    'implicit-arrow-linebreak': [
      'error',
      'beside'
    ],
    'no-useless-constructor': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-iterator': 'error',
    'no-restricted-syntax': 'error',
    'generator-star-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'dot-notation': 'error',
    'no-undef': 'error',
    'prefer-const': 'error',
    'one-var': [
      'error',
      'always'
    ],
    'no-multi-assign': 'error',
    'no-plusplus': 'error',
    'operator-linebreak': [
      'error',
      'after'
    ],
    'no-unused-vars': 'error',
    'eqeqeq': [
      'error',
      'always'
    ],
    'no-case-declarations': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-mixed-operators': 'error',
    'nonblock-statement-body-position': [
      'error',
      'below'
    ],
    'brace-style': 'error',
    'no-else-return': 'error',
    'spaced-comment': [
      'error',
      'always'
    ],
    'no-new-wrappers': 'error',
    'radix': 'error',
    'id-length': 'error',
    'camelcase': 'error',
    'new-cap': [
      'error',
      {
        'newIsCap': true
      }
    ],
    'no-underscore-dangle': 'error',
    'no-restricted-globals': [
      'error',
      'event'
    ],
    'sort-keys': 'error',
    'sort-vars': 'error',
    'sort-imports': 'error',
    'complexity': [
      'error',
      2
    ],
    'no-useless-call': 'error',
    'strict': 'error'
  }
};