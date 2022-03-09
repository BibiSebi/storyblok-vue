<template>
  <div v-editable="blok" class="flex flex-col py-8 mb-6">
    <img
      v-if="blok.image"
      :src="blok.image.image"
      :alt="blok.image.alt_tag"
      class="flex"
    />
    <h2 v-if="blok.headline" v-editable="blok" class="text-2xl font-semibold">
      {{ blok.headline }}
    </h2>
    <small v-if="blok.created_on" v-editable="blok">{{
      blok.created_on
    }}</small>
    <span v-if="blok.text" v-editable="blok">{{ blok.text }}</span>
  </div>
</template>

<script setup>
defineProps({
  blok: Object,
});
</script>
