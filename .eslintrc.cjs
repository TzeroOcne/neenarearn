module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    extraFileExtensions: ['.svelte'],
    sourceType: 'module',
    ecmaVersion: 2020,
    project: ['./tsconfig.json'],
  },
  rules: {
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'tsdoc/syntax': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-labels': 0,
    'no-restricted-syntax': 0,
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      parser: 'svelte-eslint-parser',
      rules: {
        'import/no-unresolved': 'off',
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/restrict-template-expressions': [
          'warn',
          {
            allowNumber: true,
            allowBoolean: true,
            allowNullish: true,
            allowAny: true,
          },
        ],
      },
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  settings: {},
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:svelte/recommended',
    'prettier',
  ],
  ignorePatterns: ['*.cjs', 'static/*.js', 'svelte.config.js', 'scripts/js/*.ts'],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
};
