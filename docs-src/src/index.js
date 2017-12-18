import Vue from 'vue'
import demo from './demo.vue'
import scrollSpy from '../../src/index'

Vue.use(scrollSpy)

new Vue({ // eslint-disable-line no-new
  el: '#demo',
  ...demo
})
