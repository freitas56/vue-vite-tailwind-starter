<template>
   <footer class="bg-slate-100 dark:bg-slate-800 py-4">
      <div class="flex items-center justify-between mx-auto max-w-7xl px-2">
         <a href="https://diple.online" class="hover:opacity-90">
            <img class="block h-10 w-auto" src="/imgs/logo.png" />
         </a>

         <div class="flex items-center text-slate-600 dark:text-slate-400">
            <div>
               <a class="rounded-full hover:opacity-90" href="#">
                  <BsMoonStars class="h-5 w-auto" />
               </a>

               <!-- <a class="rounded-full" hover:opacity-90 href="#">
                  <BsSun class="h-5 w-auto" />
               </a> -->
            </div>

            <div class="ml-3">
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
import { BsSun, BsMoonStars, BsGithub } from "@kalimahapps/vue-icons/bs"
</script>
