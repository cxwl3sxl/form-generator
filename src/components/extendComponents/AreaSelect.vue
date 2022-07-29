<template>
  <div class="el-input">
    <div class="box">
      区域选择框：{{ propName }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AreaSelect',
  props: {
    propName: { required: true }
  }
}
</script>
