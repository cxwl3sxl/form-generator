// eslint-disable-next-line import/no-cycle
import Prop from './csProp'

export class CsTypeDataDictionarySelector {
  getConfig(prop) {
    if (!(prop instanceof Prop)) throw new Error('参数类型错误')

    return {
      tag: 'DataDictionarySelector',
      icon: 'select',
      config: {
        category: prop._dictCategory
      }
    }
  }
}
