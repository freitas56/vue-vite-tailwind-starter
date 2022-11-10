<template>
   <div class="flex flex-col h-full">
      <CpMain />
      <CpFooter />
   </div>
</template>

<script setup>
import CpMain from "../components/CpMain.vue"
import CpFooter from "../components/CpFooter.vue"
import { onMounted } from "vue"

onMounted(() => {
   console.log(":D")
})
</script>
