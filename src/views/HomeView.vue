<script setup>
import { ref, onMounted } from "vue";
import { useStoryblokApi, useStoryblokBridge } from "@storyblok/vue";

const story = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/overview", {
  version: "draft",
});

story.value = data.story;

onMounted(() => {
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
});
</script>

<template>
  <Page
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>
