import { createApp, h } from 'vue'
import App from './App.vue'
import MinecraftUnderConstruction from './MinecraftUnderConstruction.vue'

// Detect domain logic
const domain = window.location.hostname.toLowerCase()
const isWarden = domain.includes('warden')

// Route to correct component
const SelectedComponent = isWarden ? MinecraftUnderConstruction : App

createApp({
  render: () => h(SelectedComponent)
}).mount('#app')