<template lang="pug">
CpHeader
router-view
CpFooter
</template>

<script>
import CpHeader from "../components/CpHeader.vue"
import CpFooter from "../components/CpFooter.vue"

export default {
   name: "LyPublic",
   components: {
      CpHeader,
      CpFooter,
   },
}
</script>
