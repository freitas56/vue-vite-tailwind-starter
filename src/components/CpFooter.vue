<script setup>
import { ref, onBeforeMount } from "vue"
import {
   Popover,
   PopoverButton,
   // ListboxOptions,
   // ListboxOption,
} from "@headlessui/vue"
import {
   BsGithub,
   BsClipboardHeart,
   BsDisplay,
   BsChevronUp,
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

// const colorSchemeOptions = [
//    { id: "system", label: "Sistema", icon: BsDisplay },
//    { id: "classDark", label: "Escuro", icon: BsMoonStars },
//    { id: "classLight", label: "Claro", icon: BsSun },
// ]
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

const openMySite = () => {
   window.open("https://72fcosta.netlify.app", "_self")
}

const openMyRepo = () => {
   window.open("https://github.com/72fcosta/vue-vite-tailwind-starter", "_self")
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
      <div class="flex justify-between mx-auto max-w-7xl px-2">
         <button
            class="flex ring-2 ring-slate-400 rounded-md gap-x-3 px-3 py-2"
            @click="openMySite">
            <BsClipboardHeart class="h-5 w-auto" />
            <span class="text-base">72fcosta</span>
         </button>

         <div class="flex items-center justify-between">
            <Popover>
               <PopoverButton
                  class="flex ring-2 ring-slate-400 rounded-md gap-x-3 px-3 py-2">
                  <BsDisplay v-if="!isClassDark" class="h-5 w-auto" />
                  <BsChevronUp v-else class="h-5 w-auto" />
                  <Component :is="colorScheme.icon" class="h-5 w-auto" />
               </PopoverButton>
            </Popover>

            <button
               class="flex ring-2 ring-slate-400 rounded-md gap-x-3 px-3 py-2"
               @click="openMyRepo">
               <BsGithub class="h-5 w-auto" />
            </button>
         </div>
      </div>
   </footer>
</template>
