import DataDictionarySelector from './DataDictionarySelector'
import IdProp from './IdProp'

const components = [
  DataDictionarySelector,
  IdProp
]

const fx = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default fx
