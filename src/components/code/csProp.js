/* eslint-disable prefer-destructuring */
// eslint-disable-next-line import/no-cycle
import csTypeCompMapManager from './csTypeCompMapManager'

export default class Prop {
  constructor() {
    this._remark = ''
    this._prop = ''
    this._type = ''
    this._maxLength = -1
  }

  setRemark(remark) {
    if (remark.startsWith('/// ')) { remark = remark.substr(4) }

    if (remark.indexOf('，') > 0) {
      remark = remark.split('，')[0]
    }
    if (remark.indexOf('：') > 0) {
      remark = remark.split('：')[0]
    }
    this._remark = remark
  }

  setProp(prop) {
    const source = prop
    prop = prop.replace('public ', '').split('{')[0].trimStart().trimEnd().split(' ')
    if (prop.length !== 2) {
      console.warn(`无法识别：${source}`)
    }
    this._type = prop[0]
    this._prop = prop[1]
  }

  setMaxLength(lengthCode) {
    const result = /(\d+)/.exec(lengthCode)
    if (result.length > 0) this._maxLength = result[0]
  }

  toString() {
    return `${this._remark} ${this._type} ${this._prop}`
  }

  getElTag() {
    return csTypeCompMapManager.getMapped(this._type).getConfig(this)
  }

  toComponent() {
    const tag = this.getElTag()
    return {
      // 组件的自定义配置
      __config__: {
        label: this._remark || this._prop,
        propName: this._prop,
        labelWidth: null,
        showLabel: true,
        changeTag: true,
        tag: tag.tag,
        tagIcon: tag.icon,
        defaultValue: undefined,
        required: true,
        layout: 'colFormItem',
        span: 24,
        document: 'https://element.eleme.cn/#/zh-CN/component/input',
        // 正则校验规则
        regList: []
      },
      // 其余的为可直接写在组件标签上的属性
      placeholder: '请输入',
      style: { width: '100%' },
      clearable: true,
      readonly: false,
      disabled: false,
      ...tag.config
    }
  }
}
