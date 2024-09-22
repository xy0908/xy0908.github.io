<template>
  <div class="app">
    <app_header />
    <router-view />
    <app_footer />
  </div>
</template>

<script setup>
import app_header from "./components/app_header.vue"
import app_footer from "./components/app_footer.vue"
</script>

<style scoped lang="scss">
.app {
  width: 100%;
  min-height: 100vh;
  background-color: #121212;
}

.app::-webkit-scrollbar {
  display: none !important;
}
</style>
