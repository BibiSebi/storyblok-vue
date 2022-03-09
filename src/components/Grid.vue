<template>
  <div v-editable="blok" class="flex flex-col py-8 mb-6">
    <div :key="blok._uid" v-for="blok in blok.columns" class="flex px-6">
      <component :blok="blok" :is="blok.component" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: Object,
});
</script>
