<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <a
    v-editable="blok"
    class="px-4 py-2 bg-orange-800 text-2xl font-bold text-white rounded-sm hover:bg-black"
    :href="blok.link.url"
    >{{ blok.title }}</a
  >
</template>
