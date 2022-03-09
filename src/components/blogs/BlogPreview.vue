<script setup>
import { format } from "date-fns";

defineProps({
  blok: Object,
  link: String,
});
</script>

<template>
  <div class="relative w-72 flex m-4">
    <router-link
      class="flex-1 flex flex-col border overflow-hidden transition duration-150 ease-out hover:shadow-2xl hover:ease-in"
      :to="`/${link}`"
    >
      <div class="p-2 border-t-4 border-black h-16">
        <h2>{{ blok.headline }}</h2>
        <small v-if="blok.created_on"
          >Published on
          {{ format(new Date(blok.created_on), "LLLL dd, yyyy") }}</small
        >
      </div>
      <img
        v-if="blok.preview_image.image"
        class="w-full"
        :src="blok.preview_image.image"
        :alt="blok.preview_image.alt_tag"
      />
      <div
        v-if="!blok.preview_image.image"
        class="w-full flex-1 flex justify-center items-center"
      >
        <span> no picture provided </span>
      </div>
    </router-link>
  </div>
</template>
