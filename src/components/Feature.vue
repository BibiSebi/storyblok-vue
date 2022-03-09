<template>
  <div v-editable="blok" class="py-8 mb-6 text-center">
    <h1 class="text-5xl">{{ blok.name }}</h1>
  </div>
</template>

<script setup>
defineProps({
  blok: Object,
});
</script>
