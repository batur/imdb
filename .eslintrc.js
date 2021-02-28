module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'babel',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    React: 'writable',
  },
  plugins: ['react', 'react-hooks ', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
