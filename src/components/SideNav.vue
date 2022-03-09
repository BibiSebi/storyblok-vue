<script setup>
defineProps({
  linkList: Object,
});
</script>

<template>
  <nav class="p-4">
    <ol>
      <li class="my-2" :key="link.id" v-for="link in linkList">
        <a
          class="font-bold uppercase text-4xl hover:text-black hover:bg-white p-1 pl-4"
          :href="link.real_path"
          >{{ link.name }}</a
        >
      </li>
    </ol>
  </nav>
</template>
