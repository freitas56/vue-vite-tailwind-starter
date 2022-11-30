<script setup>
import { ref, computed, onMounted, onUpdated } from "vue"
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

//
const cScheme = ref({
   system: null,
   dark: null,
   icon: "",
   label: "",
})

const solveCSchema = () => {
   // system
   const localStorageContent = localStorage.getItem("twColorScheme")
   const isSystem = !localStorageContent
   cScheme.value.system = isSystem
   // icon
   cScheme.value.icon = BsDisplay
   // label
   cScheme.value.label = "Sistema"
   // dark
   let isDark
   if (isSystem) {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
   } else {
      isDark = localStorageContent === "dark"
   }
   cScheme.value.dark = isDark
}

const cTypeIcon = computed(() => {
   const typeIcon = cScheme.value.system ? BsDisplay : BsChevronUp
   return typeIcon
})

const cThemeIcon = computed(() => {
   const themeIcon = cScheme.value.dark ? BsMoonStars : BsSun
   return themeIcon
})
// system changed
const mmObj = window.matchMedia("(prefers-color-scheme: dark)")
mmObj.addEventListener("change", (res) => {
   cScheme.value.dark = res.matches
})
// class changed
const schemeOptions = [
   { system: true, dark: false, icon: BsDisplay, label: "Sistema" },
   { system: true, dark: true, icon: BsDisplay, label: "Sistema" },
   { system: false, dark: true, icon: BsMoonStars, label: "Escuro" },
   { system: false, dark: false, icon: BsSun, label: "Claro" },
]
//
const openMySite = () => {
   window.open("https://72fcosta.netlify.app", "_self")
}

const openMyRepo = () => {
   window.open("https://github.com/72fcosta/vue-vite-tailwind-starter", "_self")
}

onMounted(() => {
   console.log("onMounted Footer")
   solveCSchema()
})

onUpdated(() => {
   console.log("onUpdated Footer")
   solveCSchema()
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
            <Listbox v-model="cScheme">
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
                           :key="scheme.label"
                           :value="scheme"
                           as="template"
                           class="my-3">
                           <li
                              class="flex cursor-pointer bg-slate-50 h-10 items-center ring-2 ring-slate-200 ring-offset-2 rounded-md gap-x-2 px-3 py-2">
                              <span> => {{ selected }}</span>
                              <span v-if="selected" class="text-red-600"
                                 >X</span
                              >
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
