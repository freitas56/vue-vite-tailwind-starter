<script setup>
import { ref, computed, onMounted, onUpdated } from "vue"
import {
   Listbox,
   ListboxButton,
   ListboxOptions,
   ListboxOption,
} from "@headlessui/vue"
import {
   BsDisplay,
   BsChevronUp,
   BsMoonStars,
   BsSun,
   BsGithub,
   BsClipboardHeart,
} from "@kalimahapps/vue-icons/bs"

const openMySite = () => {
   window.open("https://72fcosta.netlify.app", "_self")
}
const openMyRepo = () => {
   window.open("https://github.com/72fcosta/vue-vite-tailwind-starter", "_self")
}

const solveIsDark = (isDark) => {
   if (isDark) {
      document.documentElement.classList.add("dark")
   } else {
      document.documentElement.classList.remove("dark")
   }
   selectedScheme.value.dark = isDark
}
const systemThemeIsDark = window.matchMedia("(prefers-color-scheme: dark)")
const localStorageContent = localStorage.getItem("twColorScheme")
const isSystem = !localStorageContent

const schemeOptions = [
   {
      index: 0,
      system: true,
      dark: systemThemeIsDark.matches,
      icon: BsDisplay,
      label: "Sistema",
   },
   {
      index: 1,
      system: false,
      dark: true,
      icon: BsMoonStars,
      label: "Escuro",
   },
   {
      index: 2,
      system: false,
      dark: false,
      icon: BsSun,
      label: "Claro",
   },
]
const selectedScheme = ref({
   id: null,
   system: null,
   dark: null,
   label: null,
})

systemThemeIsDark.addEventListener("change", (res) => {
   const isDark = res.matches
   solveIsDark(isDark)
})

const cTypeIcon = computed(() => {
   const typeIcon = selectedScheme.value.system ? BsDisplay : BsChevronUp
   return typeIcon
})
const cThemeIcon = computed(() => {
   const themeIcon = selectedScheme.value.dark ? BsMoonStars : BsSun
   return themeIcon
})

onMounted(() => {
   let indexSchemeOptions
   if (isSystem) {
      indexSchemeOptions = 0
   } else {
      indexSchemeOptions = localStorageContent === "dark" ? 1 : 2
   }
   selectedScheme.value = schemeOptions[indexSchemeOptions]
   const isDark = selectedScheme.value.dark
   solveIsDark(isDark)
})
onUpdated(() => {
   const isDark = selectedScheme.value.dark
   if (selectedScheme.value.system) {
      localStorage.removeItem("twColorScheme")
   } else {
      localStorage.twColorScheme = isDark ? "dark" : "light"
   }
   solveIsDark(isDark)
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
                     <Component :is="cTypeIcon" class="h-5 w-5" />
                     <Component :is="cThemeIcon" class="h-5 w-5" />
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
                           v-for="scheme in schemeOptions"
                           :key="scheme.index"
                           :value="scheme"
                           as="template"
                           class="my-3">
                           <li
                              :class="selected ? 'ring-sky-600' : 'ring-slate-200'"
                              class="flex cursor-pointer bg-slate-50 h-10 items-center ring-2 ring-offset-2 rounded-md gap-x-2 px-3 py-2">
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
