// eslint.config.js
export default [
  {
    files: ["**/*.js"],  // lint all JS files
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly"
      }
    },
    rules: {
      quotes: ["error", "single"],   // enforce single quotes
      semi: ["error", "always"]      // enforce semicolons
    }
  }
];
