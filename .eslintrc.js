module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    'object-curly-newline': 'off',
    'no-console': 'error',
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
