// eslint-disable-next-line import/no-cycle
import Prop from './csProp'

export class CsTypeDefault {
  getConfig(prop) {
    if (!(prop instanceof Prop)) throw new Error('参数类型错误')

    return {
      tag: 'el-input',
      icon: 'input',
      config: {
        maxlength: prop._maxLength <= 0 ? null : prop._maxLength,
        'show-word-limit': prop._maxLength > 0,
        'prefix-icon': '',
        'suffix-icon': '',
        // 组件的插槽属性
        __slot__: {
          prepend: '',
          append: ''
        }
      }
    }
  }
}
