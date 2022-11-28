<script setup>
import { ref, onBeforeMount } from "vue"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue"
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
            class="flex ring-2 ring-slate-200 ring-offset-2 rounded-md gap-x-2 px-3 py-2"
            @click="openMySite">
            <BsClipboardHeart class="h-5 w-auto" />
            <span class="text-base">72fcosta</span>
         </button>

         <div class="flex items-center justify-between gap-x-3">
            <Popover class="w-32 relative px-2">
               <PopoverButton
                  class="flex h-10 w-full items-center justify-center mx-auto ring-2 ring-slate-200 ring-offset-2 focus:outline-blue-500 rounded-md gap-x-2 px-3 py-2">
                  <BsDisplay v-if="!isClassDark" class="h-5 w-auto" />
                  <BsChevronUp v-else class="h-5 w-auto" />
                  <Component :is="colorScheme.icon" class="h-5 w-auto" />
               </PopoverButton>
               <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0">
                  <PopoverPanel class="absolute w-32 mb-6 bottom-full right-0">
                     <div
                        class="flex flex-col bg-slate-100 rounded-md p-3 gap-2">
                        <button
                           v-for="(item, index) in colorSchemeOptions"
                           :key="index"
                           class="flex h-10 w-full items-center ring-2 ring-slate-200 ring-offset-2 rounded-md gap-x-2 gap-y-8 px-3 py-2">
                           <Component :is="item.icon" class="h-5 w-auto" />
                           <div class="text-b">{{ item.label }}</div>
                        </button>
                     </div>
                  </PopoverPanel>
               </transition>
            </Popover>

            <button
               class="flex h-10 items-center ring-2 ring-slate-200 ring-offset-2 rounded-md px-3 py-2"
               @click="openMyRepo">
               <BsGithub class="h-5 w-auto" />
            </button>
         </div>
      </div>
   </footer>
</template>
