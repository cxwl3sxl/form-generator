import DataDictionarySelector from './DataDictionarySelector'
import IdProp from './IdProp'
import AreaSelect from './AreaSelect'

const components = [
  DataDictionarySelector,
  IdProp,
  AreaSelect
]

const fx = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default fx
