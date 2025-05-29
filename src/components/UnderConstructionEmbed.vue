<template>
  <div :class="wrapperClass">
    <h2>{{ heading }}</h2>
    <p>{{ message }}</p>
    <p>This page: <code>{{ currentUrl }}</code></p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const currentUrl = ref('')
const hostname = window.location.hostname.toLowerCase()
const isWarden = hostname.includes('warden')

const heading = computed(() =>
    isWarden ? '🛠️ Warden Hosting — Page Under Construction' : '🌸 Under Construction'
)

const message = computed(() =>
    isWarden
        ? 'This section is being prepped for deployment. Hang tight while we finish laying the cables!'
        : 'This magical page is still in progress. Check back soon for sparkly updates!'
)

const wrapperClass = computed(() =>
    isWarden ? 'embed warden' : 'embed anime'
)

onMounted(() => {
  currentUrl.value = window.location.href
})
</script>

<style scoped>
.embed {
  text-align: center;
  padding: 1.5rem;
  margin: 1rem auto;
  max-width: 600px;
  border-radius: 16px;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.embed.anime {
  background: rgba(255, 255, 255, 0.7);
  color: #5e5a80;
  font-family: 'Comic Neue', 'Segoe UI', sans-serif;
  border: 2px dashed #ff69b4;
}

.embed.warden {
  background: rgba(30, 30, 30, 0.85);
  color: #eeeeee;
  font-family: 'Share Tech Mono', monospace;
  border: 2px solid #00eaff;
}

code {
  background: rgba(0, 0, 0, 0.2);
  padding: 0.2em 0.5em;
  border-radius: 4px;
  font-weight: bold;
}
</style>