<script setup>
import CpMain from "../components/CpMain.vue"
import CpFooter from "../components/CpFooter.vue"
import { useMainStore } from "../stores/main"
const store = useMainStore()
</script>

<template>
   <div class="flex flex-col h-full" :class="store.themeIsDark ? 'dark' : ''">
      <CpMain />
      <CpFooter />
   </div>
</template>
