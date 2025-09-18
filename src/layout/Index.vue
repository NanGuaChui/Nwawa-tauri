<script setup lang="ts">
import { computed } from 'vue';
import Controls from './Controls.vue';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

const layoutClass = computed(() => {
  const result: string[] = [];

  result.push(appStore.bgTransparent ? 'bg-white/0' : 'bg-white');

  if (appStore.mouseOpacity) {
    result.push('opacity-0', 'hover:opacity-100', 'transition-opacity');
  }

  return result.join(' ');
});
</script>

<template>
  <div class="layout" :class="layoutClass">
    <div class="layout-header drag-region opacity-0 bg-black/10 flex justify-end">
      <Controls class="no-drag" :onOpenSetting="() => {}" />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  &:hover .layout-header {
    opacity: 1;
  }
}
</style>
