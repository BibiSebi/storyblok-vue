<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { useStoryblokApi } from "@storyblok/vue";
import BlogPreview from "./BlogPreview.vue";
import Checkboxes from "../Checkboxes.vue";

defineProps({
  blok: Object,
});

const storyblokApi = useStoryblokApi();
const stories = ref(null);
let filter = [];

const retrieveStory = async (filter) => {
  return storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "blogs/blog",
    sort_by: "published_at:desc",
    resolve_links: "url",
    filter_query: {
      categories: {
        in_array: filter ? filter?.join(",") : null,
      },
    },
  });
};

const { data: datasource_data } = await storyblokApi.get(
  "cdn/datasource_entries",
  {
    datasource: "categories",
  }
);

const setStories = async (filter) => {
  const { data } = await retrieveStory(filter);
  stories.value = data.stories;
};

onMounted(async () => {
  await setStories();
});

const onChange = async (ev) => {
  if (ev.target.checked) {
    filter = [...filter, ev.target.name];
  } else {
    filter = filter.filter((val) => val !== ev.target.name);
  }
  await setStories(filter);
};
</script>

<template>
  <Checkboxes
    :entries="datasource_data.datasource_entries"
    :onChange="onChange"
  />

  <ul class="flex flex-wrap relative">
    <li :key="blok.uuid" v-for="blok in stories">
      <BlogPreview :blok="blok.content" :link="blok.full_slug" />
    </li>
  </ul>
</template>
