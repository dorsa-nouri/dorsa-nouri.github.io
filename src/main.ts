import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

function initTheme() {
  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = stored === 'dark' || (!stored && prefersDark)
  document.documentElement.classList.toggle('dark', isDark)
}

initTheme()

createApp(App).mount('#app')
