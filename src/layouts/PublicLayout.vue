<template lang="pug">
TheHeader
router-view
TheFooter
</template>

<script>
import TheHeader from "../components/TheHeader.vue"
import TheFooter from "../components/TheFooter.vue"

export default {
   name: "PublicLayout",
   components: {
      TheHeader,
      TheFooter,
   },
}
</script>
