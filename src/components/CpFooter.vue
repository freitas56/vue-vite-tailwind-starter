<script setup>
import { ref, onBeforeMount } from "vue"
import {
   Popover,
   PopoverButton,
   ListboxOptions,
   ListboxOption,
} from "@headlessui/vue"
import {
   BsGithub,
   BsDisplay,
   BsMoonStars,
   BsSun,
} from "@kalimahapps/vue-icons/bs"

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

const colorScheme = ref(null)

const colorSchemeOptions = [
   { id: "system", label: "Sistema", icon: BsDisplay },
   { id: "classDark", label: "Escuro", icon: BsMoonStars },
   { id: "classLight", label: "Claro", icon: BsSun },
]
const colorSchemes = [
   { id: "systemDark", label: "Escuro", icon: BsMoonStars },
   { id: "systemLight", label: "Claro", icon: BsSun },
   { id: "classDark", label: "Escuro", icon: BsMoonStars },
   { id: "classLight", label: "Claro", icon: BsSun },
]
const solvedColorScheme = (id) => {
   return colorSchemes.find((item) => item.id === id)
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
            <Popover>
               <PopoverButton class="px-3 py-2">
                  <Component :is="colorScheme.icon" class="h-5 w-auto" />
               </PopoverButton>
            </Popover>

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
