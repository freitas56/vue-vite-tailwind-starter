module.exports = {
   parserOptions: {
      ecmaVersion: '2021',
   },
   env: {
      browser: true,
      'vue/setup-compiler-macros': true,
   },
   extends: ['plugin:vue/vue3-essential'],
   plugins: ['vue', 'no-autofix'],
   rules: {
      'no-autofix/prefer-const': ['error'],
      'no-unused-vars': ['error'],
      'no-var': ['error'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
   },
}
