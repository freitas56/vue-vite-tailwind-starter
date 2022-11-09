<template>
   <header>
      <Disclosure as="nav" class="bg-gray-200" v-slot="{ open }">
         <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
               <div
                  class="absolute inset-y-0 left-0 flex items-center sm:hidden"
               >
                  <!-- Mobile menu button-->
                  <DisclosureButton
                     class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                     <span class="sr-only">Open main menu</span>
                  </DisclosureButton>
               </div>
               <div
                  class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
               >
                  <div class="flex flex-shrink-0 items-center">
                     <img class="block h-10 w-auto" src="/imgs/logo.png" />
                  </div>
                  <div class="hidden sm:ml-6 sm:block">
                     <div class="flex space-x-4">
                        <a
                           v-for="item in navigation"
                           :key="item.name"
                           :href="item.href"
                           :class="[
                              item.current
                                 ? 'bg-gray-900 text-white'
                                 : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium',
                           ]"
                           :aria-current="item.current ? 'page' : undefined"
                        >
                           {{ item.name }}
                        </a>
                     </div>
                  </div>
               </div>
               <div
                  class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
               >
                  <a
                     class="rounded-full"
                     href="https://github.com/72fcosta/vue-vite-tailwind-starter"
                  >
                     <BsMoonStars class="h-5 w-5" />
                  </a>

                  <a
                     class="rounded-full"
                     href="https://github.com/72fcosta/vue-vite-tailwind-starter"
                  >
                     <BsSun class="h-5 w-5" />
                  </a>

                  <a
                     class="rounded-full"
                     href="https://github.com/72fcosta/vue-vite-tailwind-starter"
                  >
                     <BsGithub class="h-5 w-5" />
                  </a>

                  <!-- Profile dropdown -->
                  <Menu as="div" class="relative">
                     <div>
                        <menu-button
                           class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                        </menu-button>
                     </div>
                  </Menu>
               </div>
            </div>
         </div>

         <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
               <DisclosureButton
                  v-for="item in navigation"
                  :key="item.name"
                  as="a"
                  :href="item.href"
                  :class="[
                     item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                     'block px-3 py-2 rounded-md text-base font-medium',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}
               </DisclosureButton>
            </div>
         </DisclosurePanel>
      </Disclosure>
   </header>
</template>

<script setup>
import {
   Disclosure,
   DisclosureButton,
   DisclosurePanel,
   Menu,
   MenuButton,
} from "@headlessui/vue"
import { BsSun, BsMoonStars, BsGithub } from "@kalimahapps/vue-icons/bs"

const navigation = []
</script>
