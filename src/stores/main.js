import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
   state: () => {
      return {
         twColorSchema: undefined,
      }
   },
   actions: {
      setColorSchema(colorScheme) {
         this.twColorSchema = colorScheme
      },
   },
})
