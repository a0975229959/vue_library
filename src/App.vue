// App.vue
<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>