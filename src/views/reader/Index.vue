<script lang="ts" setup>
import Iconify from '@/components/Iconify.vue';
import { NIcon, NP, NText, NUpload, NUploadDragger } from 'naive-ui';
</script>

<template>
  <NUpload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
    <NUploadDragger>
      <div style="margin-bottom: 12px">
        <NIcon size="48" :depth="3">
          <Iconify icon="ri:file-upload-line" />
        </NIcon>
      </div>
      <NText style="font-size: 16px"> 点击或者拖动文件到该区域来上传 </NText>
      <NP depth="3" style="margin: 8px 0 0 0"> 请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码 </NP>
    </NUploadDragger>
  </NUpload>
</template>

<style lang="scss" scoped></style>
