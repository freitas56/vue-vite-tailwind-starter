import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
   state: () => {
      return {
         twTheme: undefined,
      }
   },
   actions: {
      setDark(twTheme) {
         this.twTheme = twTheme
         console.log("setDark", this.twTheme)
      },
   },
})
