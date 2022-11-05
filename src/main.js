import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"
import { createPinia } from "pinia"
import "./css/main.css"

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount("#app")
