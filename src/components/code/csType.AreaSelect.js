// eslint-disable-next-line import/no-cycle
import Prop from './csProp'

export class CsTypeAreaSelect {
  getConfig(prop) {
    if (!(prop instanceof Prop)) throw new Error('参数类型错误')

    return {
      tag: 'AreaSelect',
      icon: 'area',
      config: {
        propName: prop._prop,
        placeholder: '请选择'
      },
      default: null
    }
  }
}
