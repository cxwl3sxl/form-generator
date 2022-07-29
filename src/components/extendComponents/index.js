import DataDictionarySelector from './DataDictionarySelector'

const components = [
  DataDictionarySelector
]

const fx = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default fx
