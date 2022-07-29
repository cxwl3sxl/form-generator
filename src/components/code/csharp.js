import Class from './csClass'

export default class CSharp {
  constructor(code) {
    this._code = code
    this._classs = []
  }

  parse() {
    const lines = `${this._code}`.split('\n')
    let csClass
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trimStart()
      if (line.indexOf(' class ') >= 0) {
        if (csClass) {
          csClass.end()
          csClass = null
        } else {
          csClass = new Class()
          this._classs.push(csClass)
        }
      }

      if (csClass && (line.startsWith('public ') || line.startsWith('/// ') || line.startsWith('['))) {
        csClass.addLine(line)
      }
    }

    if (csClass) csClass.end()
  }

  getComponents() {
    const comps = []
    for (let i = 0; i < this._classs.length; i++) {
      this._classs[i].generateComponents(comps)
    }
    return comps
  }
}
