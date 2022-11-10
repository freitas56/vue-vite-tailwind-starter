<template>
   <footer class="bg-slate-800 py-4">
      <div class="flex items-center justify-between mx-auto max-w-7xl px-2">
         <div>
            <img class="block h-10 w-auto" src="/imgs/logo.png" />
         </div>

         <div class="flex items-center">
            <div>
               <a class="rounded-full text-slate-400" href="#">
                  <BsMoonStars class="h-5 w-auto" />
               </a>

               <!-- <a class="rounded-full text-slate-400" href="#">
                  <BsSun class="h-5 w-auto" />
               </a> -->
            </div>

            <div class="ml-3">
               <a
                  class="rounded-full text-slate-400"
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
