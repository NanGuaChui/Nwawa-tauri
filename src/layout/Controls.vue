<script lang="ts" setup>
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';
import { setWindowSize } from '@/utils/ipc-util';
import IconButton from '@/components/IconButton.vue';

const props = defineProps<{ onOpenSetting: () => void }>();

const appStore = useAppStore();

const switchMouseOpacity = () => {
  appStore.setMouseOpacity(!appStore.mouseOpacity);
};

const toggleSingleLineMode = () => {
  const newValue = !appStore.singleLineMode;
  appStore.setSingleLineMode(newValue);
  if (newValue) {
    setWindowSize('single');
  } else {
    setWindowSize('normal');
  }
};

const switchOpacity = () => {
  appStore.setBgTransparent(!appStore.bgTransparent);
};

const onPrev = () => {};

const onNext = () => {};

const switchNovel = () => {};

// 按钮配置中心化管理
const buttons = computed(() => [
  { icon: 'ri:file-upload-line', text: '设置', onClick: props.onOpenSetting },
  { icon: 'ri:checkbox-multiple-blank-line', text: '切换文件', onClick: switchNovel },
  {
    icon: 'ri:mouse-line',
    class: appStore.mouseOpacity ? '!text-green-300' : '',
    text: appStore.mouseOpacity ? '关闭鼠标移出淡出' : '开启鼠标移出淡出',
    onClick: switchMouseOpacity,
  },
  {
    icon: 'ri:text-wrap',
    text: appStore.singleLineMode ? '关闭单行模式' : '开启单行模式',
    class: appStore.singleLineMode ? '!text-green-300' : '',
    onClick: toggleSingleLineMode,
  },
  { icon: 'ri:a-b', text: '背景色', class: appStore.bgTransparent ? '!text-green-400' : '', onClick: switchOpacity },
  { icon: 'ri:arrow-left-line', text: '上一页', onClick: onPrev },
  { icon: 'ri:arrow-right-line', text: '下一页', onClick: onNext },
  { icon: 'ri:drag-move-line', text: '拖动窗口', class: 'drap' },
]);
</script>

<template>
  <div class="flex items-center p-1 transition-opacity">
    <IconButton
      v-for="(btn, index) in buttons"
      :key="index"
      :style="appStore.fontCss"
      :icon="btn.icon"
      :text="btn.text"
      :btn-class="btn.class"
      @click="btn.onClick"
    />
  </div>
</template>

<style lang="scss" scoped></style>
