<script setup>
import { ref, onMounted } from "vue";
import { useStoryblokApi, useStoryblokBridge } from "@storyblok/vue";
import { mapResolvedLinksToBloks } from "../utils/storyblok";

const storyblokApi = useStoryblokApi();
const story = ref(null);
const { data } = await storyblokApi.get("cdn/stories/blogs/overview", {
  version: "draft",
  resolve_links: "url",
});

// TODO: rework
story.value = {
  ...data.story,
  content: {
    ...data.story.content,
    body: mapResolvedLinksToBloks(data.story.content.body, data.links),
  },
};

onMounted(() => {
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
});
</script>

<template>
  <div class="flex flex-col items-center pt-4">
    <!-- TODO: check a11y for uppercase -->
    <h1 class="text-5xl bg-black text-white uppercase p-1">
      {{ story.name }}
    </h1>
    <Page
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </div>
</template>
