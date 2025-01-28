<script setup>
import { RouterView } from 'vue-router';
// import header and foooter
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <div>
    <RouterView />
  </div>
</template>
