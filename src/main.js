import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// eslint-disable-next-line no-unused-vars
const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')