<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <RouterView />
      </div>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
