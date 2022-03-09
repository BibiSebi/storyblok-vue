<script setup>
import { ref, onMounted } from "vue";
import { useStoryblokApi, useStoryblokBridge } from "@storyblok/vue";

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get("cdn/stories/blogs/overview", {
  version: "draft",
});

const story = ref(null);
story.value = data.story;

onMounted(() => {
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
});
</script>

<template>
  <h1 class="text-5xl text-center">{{ story.name }}</h1>
  <Page
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>
