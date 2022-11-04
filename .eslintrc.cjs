module.exports = {
   root: true,
   parserOptions: {
      ecmaVersion: '2021',
   },
   env: {
      browser: true,
      'vue/setup-compiler-macros': true,
   },
   extends: [
      'plugin:vue/vue3-essential',
   ],
   plugins: [
      'vue',
   ],
   rules: {
      'indent': ['error', 3],
      'comma-dangle': ['error', 'always-multiline'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'prefer-const': ['error'],
      'no-unused-vars': ['error'],
   },
}
