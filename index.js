module.exports = {
  extends: ["eslint-config-standard", "./rules/gandalf"].map(require.resolve),
  plugins: ["sort-imports-es6-autofix"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "sort-imports-es6-autofix/sort-imports-es6": [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
      }
    ],
    "class-methods-use-this": 0
  }
};
