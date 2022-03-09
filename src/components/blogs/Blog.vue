<script setup>
import { format } from "date-fns";
defineProps({
  blok: Object,
  published_at: String,
  author: Object,
});
</script>

<template>
  <article class="flex justify-center flex-col w-full p-4" v-editable="blok">
    <div class="flex">
      <div class="flex flex-col w-1/2">
        <h1 class="text-5xl font-bold border-l-4 border-black pl-4">
          {{ blok.headline }}
        </h1>
        <span class="w-1/2 font-serif">{{ blok.teaser }}</span>
        <span v-if="author" class="font-serif text-sm"
          >By {{ author.name }}
        </span>
        <span class="font-serif text-sm"
          >Published on: {{ format(new Date(published_at), "LLLL dd, yyyy") }}
        </span>
      </div>

      <img
        class="w-1/2"
        :src="blok.preview_image.image"
        :alt="blok.preview_image.alt_tag"
      />
    </div>

    <p class="mt-16 w-1/2 self-center">{{ blok.paragraph }}</p>
    <!-- TODO: place author into a separate component -->
    <section v-if="author" class="font-serif text-sm">
      <span>More about {{ author.name }}</span>
      <p>{{ author.content.description }}</p>
      <span v-if="author.content.username"
        >Github: @{{ author.content.username }}</span
      >
    </section>
  </article>
</template>
