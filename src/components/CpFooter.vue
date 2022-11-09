<template>
   <footer class="bg-slate-900 py-2">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
         <div class="flex">
            <div>
               <img class="block h-10 w-auto" src="/imgs/logo.png" />
            </div>

            <div>
               <div>
                  <a class="rounded-full text-slate-400" href="#">
                     <BsMoonStars class="h-5 w-auto" />
                  </a>

                  <a class="rounded-full text-slate-400" href="#">
                     <BsSun class="h-5 w-auto" />
                  </a>
               </div>

               <div>
                  <a
                     class="rounded-full text-slate-400"
                     href="https://github.com/72fcosta/vue-vite-tailwind-starter"
                  >
                     <BsGithub class="h-5 w-auto" />
                  </a>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>

<script setup>
import { BsSun, BsMoonStars, BsGithub } from "@kalimahapps/vue-icons/bs"
</script>
