import '@/assets/styles/base.css'
import '@/assets/styles/variables.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import en from '@/locales/en.json'
import es from '@/locales/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    es,
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
