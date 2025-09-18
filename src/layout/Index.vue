<script setup lang="ts">
import Controls from './Controls.vue';
</script>

<template>
  <div class="layout">
    <div class="drag-region bg-black/10 flex justify-end">
      <Controls class="no-drag" :onOpenSetting="() => {}" />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>