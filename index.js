module.exports = {
  extends: ["eslint-config-standard", "./rules/gandalf"].map(require.resolve),
  plugins: ["sort-imports-es6-autofix"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "class-methods-use-this": 0
  }
};
