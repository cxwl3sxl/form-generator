<template>
  <div class="el-input">
    <div class="box">
      主键列，不会显示出来：{{ keyName }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'IdProp',
  props: {
    keyName: { required: true }
  }
}
</script>
