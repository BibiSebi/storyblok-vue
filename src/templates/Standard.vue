<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import SideNav from "../components/SideNav.vue";
import { useStoryblokApi } from "@storyblok/vue";

const storyblokApi = useStoryblokApi();
const links = ref(null);
const { data } = await storyblokApi.get(`cdn/links`, {
  version: "draft",
  starts_with: "blogs/",
});
links.value = data.links;
</script>

<template>
  <div class="flex">
    <SideNav
      class="w-auto pr-32 bg-black text-white min-h-screen"
      :linkList="links"
    />
    <RouterView />
  </div>
</template>
