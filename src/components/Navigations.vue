<script setup>
import { ref,computed } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="flex items-center gap-5 h-full">
        <RouterLink to="/">خانه</RouterLink>
        <RouterLink to="/lesson">دوره ها</RouterLink>
        <RouterLink to="/find-tutors">جست و جو در دوره ها</RouterLink>
        <RouterLink to="/about">درباره ما</RouterLink>
    </nav>
</template>