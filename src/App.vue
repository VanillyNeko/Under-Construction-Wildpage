<template>
  <div class="wrapper">
    <h1>🌙 Under Construction 🌸</h1>
    <p>The page <code>{{ currentUrl }}</code> is not available yet.</p>
    <p>Check back later for magical updates!</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const currentUrl = ref('')

onMounted(() => {
  currentUrl.value = window.location.href
})
</script>

<style>
/* Removed body style from here */
.wrapper {
  text-align: center;
  padding: 2rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 3em;
  margin-bottom: 1rem;
  color: #ff69b4;
}

code {
  background: #fff0f6;
  padding: 0.2em 0.5em;
  border-radius: 5px;
  font-weight: bold;
  color: #d63384;
}
</style>
