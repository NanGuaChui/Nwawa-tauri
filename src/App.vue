<script setup lang="ts">
import Layout from './layout/Index.vue';
</script>

<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<style>
.window-drag-region {
  -webkit-app-region: drag;
}

.no-drag {
  -webkit-app-region: no-drag;
}
</style>
