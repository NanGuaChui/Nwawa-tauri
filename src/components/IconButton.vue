<script lang="ts" setup>
import { NButton, NPopover } from 'naive-ui';
import Iconify from './Iconify.vue';

defineProps({
  icon: { type: String, required: true },
  text: { type: String },
  btnClass: { type: String }
});
</script>

<template>
  <NButton v-if="!text" quaternary circle size="tiny" v-bind="$attrs" :class="btnClass">
    <template #icon>
      <Iconify :icon="icon" />
    </template>
  </NButton>
  <NPopover v-else trigger="hover">
    <template #trigger>
      <NButton quaternary circle size="tiny" v-bind="$attrs" :class="btnClass">
        <template #icon>
          <Iconify :icon="icon" />
        </template>
      </NButton>
    </template>
    <span>{{ text }}</span>
  </NPopover>
</template>

<style lang="scss" scoped></style>
