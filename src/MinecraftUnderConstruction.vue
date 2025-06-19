<template>
  <div class="wrapper">
    <h1>🛠️ Warden Hosting 🛠️</h1>
    <h2>🛠️ Page Under Construction 🛠️</h2>
    <p>This page isn’t ready yet.</p>
    <p>Please check back soon. The servers are still assembling.</p>
    <p>We hope for great things from this!</p>
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
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

/* Removed body style from here */
.wrapper {
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  background: rgba(30, 30, 30, 0.8);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  max-width: 600px;
}

h1 {
  font-size: 2.2em;
  margin-bottom: 1rem;
  color: #00eaff;
}

code {
  background: rgba(0, 0, 0, 0.6);
  padding: 0.2em 0.5em;
  border-radius: 6px;
  color: #ffffff;
}
</style>
