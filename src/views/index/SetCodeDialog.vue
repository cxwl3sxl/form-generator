<template>
  <div>
    <el-dialog
      v-bind="$attrs"
      width="80%"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      v-on="$listeners"
      @opened="tryLoadCode"
    >
      <el-row :gutter="15">
        <codemirror v-model="code" :options="codeOpts" />
      </el-row>

      <div slot="footer">
        <el-button @click="close">
          取消
        </el-button>
        <el-button type="primary" @click="handelConfirm">
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { codemirror } from 'vue-codemirror-lite'

// require('codemirror/mode/javascript/javascript')
require('codemirror/mode/clike/clike')
require('codemirror/theme/ambiance.css')

export default {
  components: { codemirror },
  inheritAttrs: false,
  data() {
    return {
      code: '',
      codeOpts: {
        mode: 'text/x-csharp',
        indentUnit: 2, // 缩进单位，默认2
        smartIndent: true, // 是否智能缩进
        styleActiveLine: true,
        lineNumbers: true,
        lineWrapping: true,
        matchBrackets: true,
        // 设置主题
        theme: 'ambiance'
      }
    }
  },
  methods: {
    close(e) {
      this.$emit('update:visible', false)
    },
    handelConfirm() {
      localStorage.setItem('_lastCode', this.code)
      this.$emit('confirm', this.code)
      this.$emit('update:visible', false)
    },

    tryLoadCode() {
      const code = localStorage.getItem('_lastCode')
      if (code) this.code = code
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
