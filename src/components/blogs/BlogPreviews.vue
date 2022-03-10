<script setup>
import { ref } from "vue";
import { useStoryblokApi } from "@storyblok/vue";
import BlogPreview from "./BlogPreview.vue";

const storyblokApi = useStoryblokApi();
const stories = ref(null);
const { data } = await storyblokApi.get("cdn/stories", {
  version: "draft",
  starts_with: "blogs/blog",
  sort_by: "published_at:asc",
  resolve_links: "url",
});

stories.value = data.stories;
</script>

<template>
  <ul class="flex flex-wrap relative">
    <li :key="blok.uuid" v-for="blok in stories">
      <BlogPreview :blok="blok.content" :link="blok.full_slug" />
    </li>
  </ul>
</template>
