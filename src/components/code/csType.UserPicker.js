// eslint-disable-next-line import/no-cycle
import Prop from './csProp'

export class CsTypeUserPicker {
  getConfig(prop) {
    if (!(prop instanceof Prop)) throw new Error('参数类型错误')

    return {
      tag: 'UserPicker',
      icon: 'user',
      config: {
        propName: prop._prop
      },
      sameDepartment: false
    }
  }
}
