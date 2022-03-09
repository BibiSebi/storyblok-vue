<script setup>
import Standard from "./templates/Standard.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <Standard />
      </div>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
