// eslint.config.js
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly'
      }
    },
    rules: {
      quotes: 'off', 
      semi: ['error', 'always'], // Semikolons
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }] // nur console.log verbieten
    }
  }
];
