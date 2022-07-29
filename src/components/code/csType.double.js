// eslint-disable-next-line import/no-cycle
import Prop from './csProp'

export class CsTypeDouble {
  getConfig(prop) {
    if (!(prop instanceof Prop)) throw new Error('参数类型错误')

    return {
      tag: 'el-input-number',
      icon: 'double',
      config: {
        min: undefined,
        max: undefined,
        step: 0.01,
        'step-strictly': false,
        precision: 2,
        'controls-position': ''
      }
    }
  }
}
