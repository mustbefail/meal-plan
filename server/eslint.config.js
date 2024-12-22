import js from '@eslint/js'
import globals from 'globals'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { ignores: ['dist', ''] },
  prettierRecommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        ...globals.es2025
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          printWidth: 120,
          semi: false,
          singleQuote: true,
          trailingComma: 'none'
        }
      ]
    }
  }
]
