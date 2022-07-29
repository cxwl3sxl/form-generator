import DataDictionarySelector from './DataDictionarySelector'
import IdProp from './IdProp'
import AreaSelect from './AreaSelect'
import UserPicker from './UserPicker'

const components = [
  DataDictionarySelector,
  IdProp,
  AreaSelect,
  UserPicker
]

const fx = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default fx
