import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
   state: () => {
      return {
         themeIsDark: undefined,
      }
   },
   actions: {
      setThemeIsDark(themeIsDark) {
         this.themeIsDark = themeIsDark
         console.log("setDark", this.themeIsDark)
      },
   },
})
