<script setup>
defineProps({
  entries: Object,
  onChange: Function,
});
</script>

<template>
  <div :key="entry.id" v-for="entry of entries">
    <input
      v-on:change="onChange($event)"
      type="checkbox"
      :id="entry.id"
      :name="entry.value"
    />
    <label :for="entry.id"> {{ entry.name }}</label>
  </div>
</template>
