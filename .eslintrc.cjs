module.exports = {
   root: true,
   parserOptions: {
      ecmaVersion: '2021',
   },
   env: {
      browser: true,
      'vue/setup-compiler-macros': true,
   },
   extends: ['plugin:vue/vue3-essential'],
   plugins: ['vue'],
   rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'prefer-const': ['error'],
      'no-unused-vars': ['error'],
   },
}
