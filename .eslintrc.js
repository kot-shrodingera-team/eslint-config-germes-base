module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  ignorePatterns: ['!.*', 'node_modules'],
  overrides: [
    {
      files: ['*.js'],
      extends: ['airbnb-base', 'plugin:prettier/recommended'],
    },
    {
      files: ['.prettierrc.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
