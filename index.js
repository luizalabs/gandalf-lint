module.exports = {
  extends: [
    'eslint-config-standard',
    'plugin:react/recommended',
    'plugin:vue/recommended',
    './rules/extra',
    './rules/gandalf',
  ].map(require.resolve),
  plugins: [
    'sort-imports-es6-autofix'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {}
};
