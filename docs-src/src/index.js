import Vue from 'vue'
import demo from './demo.vue'
import scrollSpy, { Easing } from '../../src/index'

Vue.use(scrollSpy, {
  easing: Easing.Cubic.In
})

new Vue({ // eslint-disable-line no-new
  el: '#demo',
  ...demo
})
