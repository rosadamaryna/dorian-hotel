module.exports = {
  env: { browser: true, es2021: true },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off',
  },
};
