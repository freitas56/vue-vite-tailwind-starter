<template>
   <footer class="bg-slate-100 dark:bg-slate-800 py-4">
      <div class="flex items-center justify-between mx-auto max-w-7xl px-2">
         <a href="https://diple.online" class="hover:opacity-90">
            <img class="block h-10 w-auto" src="/imgs/logo.png" />
         </a>

         <div class="flex items-center text-slate-600 dark:text-slate-400">
            <div>
               <div
                  class="rounded-full hover:opacity-90"
                  @click="setDark('dark')"
               >
                  <BsMoonStars class="h-5 w-auto" />
               </div>

               <!-- <a class="rounded-full" hover:opacity-90 href="#">
                  <BsSun class="h-5 w-auto" />
               </a> -->
            </div>

            <div class="ml-6">
               <a
                  class="rounded-full hover:opacity-90"
                  href="https://github.com/72fcosta/vue-vite-tailwind-starter"
               >
                  <BsGithub class="h-5 w-auto" />
               </a>
            </div>
         </div>
      </div>
   </footer>
</template>

<script setup>
import { BsMoonStars, BsGithub } from "@kalimahapps/vue-icons/bs"
import { useMainStore } from "../stores/main"

const store = useMainStore()

const setDark = (twTheme) => {
   store.setDark(twTheme)
}
</script>
