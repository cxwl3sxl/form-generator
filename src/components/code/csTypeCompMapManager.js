/* eslint-disable import/no-cycle */
import Prop from './csProp'
import { CsTypeDefault } from './csType.default'
import { CsTypeDateTime } from './csType.Datetime'
import { CsTypeBool } from './csType.bool'
import { CsTypeInt } from './csType.int'
import { CsTypeDouble } from './csType.double'
import { CsTypeDataDictionarySelector } from './csType.dataDictionarySelector'
import { CsTypeGuid } from './csType.Guid'
import { CsTypeAreaSelect } from './csType.AreaSelect'
import { CsTypeUserPicker } from './csType.UserPicker'

class CsTypeCompMapManager {
  constructor() {
    this._default = new CsTypeDefault()
    this._map = [{
      name: 'DateTime',
      type: new CsTypeDateTime()
    },
    {
      name: 'bool',
      type: new CsTypeBool()
    },
    {
      name: 'int',
      type: new CsTypeInt()
    },
    {
      name: 'double',
      type: new CsTypeDouble()
    },
    {
      name: 'float',
      type: new CsTypeDouble()
    },
    {
      name: 'DataDictionarySelector',
      type: new CsTypeDataDictionarySelector()
    },
    {
      name: 'Guid',
      type: new CsTypeGuid()
    },
    {
      name: 'AreaSelect',
      type: new CsTypeAreaSelect()
    },
    {
      name: 'UserPicker',
      type: new CsTypeUserPicker()
    }]
  }

  getMapped(typeName) {
    const target = this._map.find(a => a.name === typeName)
    if (target) return target.type
    return this._default
  }
}

const csTypeCompMapManager = new CsTypeCompMapManager()
export default csTypeCompMapManager
