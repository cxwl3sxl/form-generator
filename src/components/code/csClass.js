import Prop from './csProp'

export default class Class {
  constructor() {
    this._currentProp = null
    this._nextIsRemark = false
    this._prop = []
  }

  addLine(code) {
    if (!code) return
    if (code.startsWith('[Length(') && this._currentProp) {
      this._currentProp.setMaxLength(code)
      return
    }
    if (code.startsWith('/// <summary>')) {
      this._nextIsRemark = true
      if (this._currentProp) {
        this._prop.push(this._currentProp)
      }
      this._currentProp = new Prop()
      return
    }
    if (code.startsWith('/// </summary>')) {
      this._nextIsRemark = false
      return
    }
    if (this._nextIsRemark) {
      this._currentProp.setRemark(code)
    } else if (this._currentProp) {
      this._currentProp.setProp(code)
    }
  }

  end() {
    if (this._currentProp) {
      this._prop.push(this._currentProp)
    }
    for (let i = 0; i < this._prop.length; i++) {
      console.log(this._prop[i].toString())
    }
  }

  generateComponents(compList) {
    for (let i = 0; i < this._prop.length; i++) {
      compList.push(this._prop[i].toComponent())
    }
  }
}
