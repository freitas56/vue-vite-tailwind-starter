<script setup>
import { ref, onBeforeMount } from "vue"
import {
   Listbox,
   ListboxButton,
   ListboxOptions,
   ListboxOption,
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

const selectedScheme = ref(null)

const schemeOptions = [
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
         selectedScheme.value = solvedColorScheme("systemDark")
      } else {
         selectedScheme.value = solvedColorScheme("systemLight")
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
      <div class="flex items-center justify-between mx-auto max-w-7xl px-2">
         <button
            class="flex bg-slate-50 h-10 ring-2 ring-slate-200 ring-offset-2 rounded-md gap-x-2 px-3 py-2"
            @click="openMySite">
            <BsClipboardHeart class="h-5 w-5" />
            <span class="text-base">72fcosta</span>
         </button>

         <div class="flex items-center justify-between gap-x-3">
            <Listbox v-model="selectedScheme">
               <div class="relative">
                  <ListboxButton
                     class="flex bg-slate-50 h-10 items-center justify-center ring-2 ring-slate-200 ring-offset-2 rounded-md gap-x-2 px-3 py-2">
                     <BsDisplay v-if="!isClassDark" class="h-5 w-5" />
                     <BsChevronUp v-else class="h-5 w-5" />
                     <Component :is="selectedScheme.icon" class="h-5 w-5" />
                  </ListboxButton>
                  <transition
                     enter-active-class="transition duration-200 ease-out"
                     enter-from-class="translate-y-1 opacity-0"
                     enter-to-class="translate-y-0 opacity-100"
                     leave-active-class="transition duration-150 ease-in"
                     leave-from-class="translate-y-0 opacity-100"
                     leave-to-class="translate-y-1 opacity-0">
                     <ListboxOptions
                        class="absolute w-48 mb-6 bottom-full right-0 bg-slate-100 rounded-md px-2">
                        <ListboxOption
                           v-slot="{ selected }"
                           v-for="(scheme, index) in schemeOptions"
                           :key="index"
                           as="template"
                           class="my-3">
                           <li
                              :class="
                                 selected ? 'bg-amber-100' : 'text-gray-900'
                              "
                              class="flex bg-slate-50 h-10 items-center ring-2 ring-slate-200 ring-offset-2 rounded-md gap-x-2 px-3 py-2">
                              <Component :is="scheme.icon" class="h-5 w-5" />
                              <div class="text-b">{{ scheme.label }}</div>
                           </li>
                        </ListboxOption>
                     </ListboxOptions>
                  </transition>
               </div>
            </Listbox>

            <button
               class="flex bg-slate-50 h-10 items-center ring-2 ring-slate-200 ring-offset-2 rounded-md px-3 py-2"
               @click="openMyRepo">
               <BsGithub class="h-5 w-5" />
            </button>
         </div>
      </div>
   </footer>
</template>
