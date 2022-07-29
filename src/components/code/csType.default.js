// eslint-disable-next-line import/no-cycle
import Prop from './csProp'

export class CsTypeDefault {
  getConfig(prop) {
    if (!(prop instanceof Prop)) throw new Error('参数类型错误')

    const config = {
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

    if (prop.contain(prop._remark, ['电话', '手机号', '联系方式'])) {
      config.regList = [
        {
          pattern: '^(1|0)\\d{10}$',
          message: `请输入正确的${prop._remark}`
        }
      ]
    }
    return config
  }
}
