<script setup>
import { ref } from "vue";
import { useStoryblokApi } from "@storyblok/vue";
import BlogPreview from "./BlogPreview.vue";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: "draft",
  starts_with: "blogs/blog",
  sort_by: "published_at:asc",
});

const stories = ref(null);
stories.value = data.stories;

defineProps({
  blogs: Object,
});
</script>

<template>
  <div class="flex flex-wrap relative">
    <BlogPreview
      :blok="blok.content"
      :key="blok.uuid"
      v-for="blok in stories"
      :link="blok.full_slug"
    />
  </div>
</template>
