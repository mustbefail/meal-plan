import js from '@eslint/js'
import globals from 'globals'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import * as tseslint from 'typescript-eslint'

export default [
  { ignores: ['dist', ''] },
  prettierRecommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js, ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        ...globals.es2025,
        ...globals.jest
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
