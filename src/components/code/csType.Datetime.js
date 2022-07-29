// eslint-disable-next-line import/no-cycle
import Prop from './csProp'

export class CsTypeDateTime {
  getConfig(prop) {
    if (!(prop instanceof Prop)) throw new Error('参数类型错误')

    return {
      tag: 'el-date-picker',
      icon: 'date',
      config: {
        type: 'datetime',
        format: 'yyyy-MM-dd HH:mm:ss',
        'value-format': 'yyyy-MM-dd HH:mm:ss'
      }
    }
  }
}
