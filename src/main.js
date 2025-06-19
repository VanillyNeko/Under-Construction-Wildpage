import { createApp, h } from 'vue'
import App from './App.vue'
import MinecraftUnderConstruction from './MinecraftUnderConstruction.vue'

// Detect domain logic
const domain = window.location.hostname.toLowerCase()
const isWarden = domain.includes('warden')

// Apply body class based on theme
if (isWarden) {
  document.body.classList.add('warden-theme');
  document.body.classList.remove('anime-theme');
} else {
  document.body.classList.add('anime-theme');
  document.body.classList.remove('warden-theme');
}

// Route to correct component
const SelectedComponent = isWarden ? MinecraftUnderConstruction : App

createApp({
  render: () => h(SelectedComponent)
}).mount('#app')
