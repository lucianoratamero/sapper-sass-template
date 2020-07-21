module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3"
    }
  ],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'class-methods-use-this': [1, { 'exceptMethods': ['render'] }],
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',

    'no-case-declarations': 'off',
    'no-console': ['error', { allow: ['error'] }],
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
  },
};
