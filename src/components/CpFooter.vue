<script setup>
import { ref, onBeforeMount } from "vue"
import {
   Listbox,
   ListboxButton,
   ListboxOptions,
   ListboxOption,
} from "@headlessui/vue"
import { BsGithub, BsMoonStars, BsSun } from "@kalimahapps/vue-icons/bs"

const isClassDark = localStorage.getItem("twColorScheme")
console.log("🚀 ~ localStorage=> ", !!isClassDark)

const isSystemDark = (obj) => {
   if (obj.matches) {
      return "dark"
   } else {
      return "light"
   }
}
const mmObj = window.matchMedia("(prefers-color-scheme: dark)")
mmObj.addEventListener("change", (res) => {
   isSystemDark(res)
   console.log("🚀 ", isSystemDark(res))
})

const classDark = isClassDark ? isClassDark : isSystemDark(mmObj)
console.log("🚀 ", classDark)

// import { useMainStore } from "../stores/main"
// const store = useMainStore()
// if (
//    localStorage.twColorScheme === "dark" ||
//    (!("twColorScheme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//    document.documentElement.classList.add("dark")
// } else {
//    document.documentElement.classList.remove("dark")
// }
const colorScheme = ref(null)

const colorSchemeOptions = [
   { id: "systemDark", label: "Escuro", icon: BsMoonStars },
   { id: "systemLight", label: "Claro", icon: BsSun },
   { id: "classDark", label: "Escuro", icon: BsMoonStars },
   { id: "classLight", label: "Claro", icon: BsSun },
]
const solvedColorScheme = (id) => {
   return colorSchemeOptions.find((item) => item.id === id)
}

const solveColorSchema = () => {
   const localStorageContent = localStorage.getItem("twColorScheme")
   if (localStorageContent) {
      console.log("localStorageContent")
   } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         colorScheme.value = solvedColorScheme("systemDark")
      } else {
         colorScheme.value = solvedColorScheme("systemLight")
      }
   }
}

onBeforeMount(() => {
   console.log("onBeforeMount Footer")
   solveColorSchema()
})
</script>

<template>
   <footer class="bg-slate-100 dark:bg-slate-800 py-4">
      <div class="flex items-center justify-between mx-auto max-w-7xl px-2">
         <a href="https://72fcosta.netlify.app/" class="hover:opacity-90"
            >72fcosta</a
         >

         <div class="flex items-center text-slate-600 dark:text-slate-400">
            <Listbox v-model="colorScheme">
               <ListboxButton>
                  <Component :is="colorScheme.icon" class="h-5 w-auto" />
               </ListboxButton>
               <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
                  <ListboxOptions>
                     <ListboxOption
                        v-for="(item, index) in colorSchemaOptions"
                        :key="index"
                        :value="item"
                        as="template">
                        <li @click="setColorSchema(item.id)">
                           {{ item.label }}
                        </li>
                     </ListboxOption>
                  </ListboxOptions>
               </transition>
            </Listbox>

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
