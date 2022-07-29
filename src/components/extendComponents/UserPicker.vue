<template>
  <div class="el-input">
    <div class="box">
      用户选择框：{{ propName }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPicker',
  props: {
    propName: { required: true }
  }
}
</script>
