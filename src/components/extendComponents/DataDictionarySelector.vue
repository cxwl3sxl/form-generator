<template>
  <div class="el-input">
    <div class="box">
      数据字典选择框：{{ category }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataDictionarySelector',
  props: {
    category: { required: true }
  }
}
</script>
