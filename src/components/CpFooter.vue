<template>
   <footer class="bg-slate-100 dark:bg-slate-800 py-4">
      <div class="flex items-center justify-between mx-auto max-w-7xl px-2">
         <a href="https://diple.online" class="hover:opacity-90">
            <img class="block h-10 w-auto" src="/imgs/logo.png" />
         </a>

         <div class="flex items-center text-slate-600 dark:text-slate-400">
            <Listbox v-model="themeIsDark">
               <ListboxButton>{{ themeIsDark }}</ListboxButton>
               <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
                  <ListboxOptions>
                     <ListboxOption
                        v-for="item in themeIsDarkOptions"
                        :key="item"
                        :value="item"
                        as="template">
                        <li>{{ item }}</li>
                     </ListboxOption>
                  </ListboxOptions>
               </transition>
            </Listbox>
            <!-- <div
                  class="rounded-full hover:opacity-90"
                  @click="setThemeIsDark(true)">
                  <BsMoonStars class="h-5 w-auto" />
               </div> -->

            <!-- <a class="rounded-full" hover:opacity-90 href="#">
                  <BsSun class="h-5 w-auto" />
               </a> -->
            <!-- </div> -->

            <div class="ml-6">
               <a
                  class="rounded-full hover:opacity-90"
                  href="https://github.com/72fcosta/vue-vite-tailwind-starter">
                  <BsGithub class="h-5 w-auto" />
               </a>
            </div>
         </div>
      </div>
   </footer>
</template>

<script setup>
import { ref } from "vue"
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue"
import { BsMoonStars, BsGithub } from "@kalimahapps/vue-icons/bs"
import { useMainStore } from "../stores/main"
const store = useMainStore()

const themeIsDarkOptions = ["Sistema", "Escuro", "Claro"]
const themeIsDark = ref(themeIsDarkOptions[0])

const setThemeIsDark = (themeIsDark) => {
   localStorage.themeIsDark = themeIsDark ? "true" : "false"
   store.setThemeIsDark(themeIsDark)
}
</script>
