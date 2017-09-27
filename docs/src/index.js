/**
 * Created by lingchenxuan on 2016/12/7.
 */
import Vue from 'vue';
import demo from './demo';
import scrollSpy from '../../src/index';

Vue.use(scrollSpy);

console.log('Vue version: ', Vue.version);

const app = new Vue({
    ...demo
});

app.$mount('#demo');