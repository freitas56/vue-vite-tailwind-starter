<template>
   <cp-header />
   <div class="bg-indigo-200">
      <router-view />
   </div>
   <cp-footer />
</template>

<script setup>
import CpHeader from "../components/CpHeader.vue"
import CpFooter from "../components/CpFooter.vue"
</script>
