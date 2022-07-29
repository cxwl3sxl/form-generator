// eslint-disable-next-line import/no-cycle
import Prop from './csProp'

export class CsTypeBool {
  getConfig(prop) {
    if (!(prop instanceof Prop)) throw new Error('参数类型错误')

    return {
      tag: 'el-switch',
      icon: 'switch',
      config: {
        'active-text': '是',
        'inactive-text': '否',
        'active-color': null,
        'inactive-color': null,
        'active-value': true,
        'inactive-value': false
      }
    }
  }
}
