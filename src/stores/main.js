import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
   state: () => {
      return {
         twColorSchemeByLocalStorage: false,
         twColorScheme: undefined,
      }
   },
   actions: {
      setColorSchema(colorScheme) {

         this.twColorScheme = colorScheme
      },
   },
})
