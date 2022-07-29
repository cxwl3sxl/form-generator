// eslint-disable-next-line import/no-cycle
import Prop from './csProp'

export class CsTypeGuid {
  getConfig(prop) {
    if (!(prop instanceof Prop)) throw new Error('参数类型错误')

    return {
      tag: 'IdProp',
      icon: 'key',
      config: {
        keyName: prop._prop
      },
      default: '00000000-0000-0000-0000-000000000000'
    }
  }
}
