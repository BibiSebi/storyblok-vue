<script setup>
import { ref, onMounted } from "vue";
import { useStoryblokApi, useStoryblokBridge } from "@storyblok/vue";
import { useRoute } from "vue-router";
import Blog from "../components/blogs/Blog.vue";
import { authorRelations } from "../constants/authors";

const { params } = useRoute();
const storyblokApi = useStoryblokApi();
const story = ref(null);
const { data } = await storyblokApi.get(`cdn/stories/blogs/${params.id}`, {
  version: "draft",
  resolve_relations: authorRelations,
});

story.value = data.story;

onMounted(() => {
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory), {
    resolveRelations: authorRelations,
  });
});
</script>

<template>
  <Blog
    :blok="story.content"
    :is="story.content.component"
    :key="story.uuid"
    :published_at="story.published_at"
  />
</template>
