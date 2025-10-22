import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['dist']
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: globals.node
    },
    extends: [pluginJs.configs.recommended, ...tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'off'
    }
  }
)
