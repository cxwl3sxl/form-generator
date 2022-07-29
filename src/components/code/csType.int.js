// eslint-disable-next-line import/no-cycle
import Prop from './csProp'

export class CsTypeInt {
  getConfig(prop) {
    if (!(prop instanceof Prop)) throw new Error('参数类型错误')

    return {
      tag: 'el-input-number',
      icon: 'number',
      config: {
        min: undefined,
        max: undefined,
        step: 1,
        'step-strictly': false,
        precision: undefined,
        'controls-position': ''
      }
    }
  }
}
