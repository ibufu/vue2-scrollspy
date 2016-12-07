/**
 * Created by lingchenxuan on 2016/12/7.
 */
import Vue from 'vue';
import demo from './demo';
import scrollSpy from 'vue2-scrollspy';

Vue.use(scrollSpy);

const app = new Vue({
    ...demo
});

app.$mount('#demo');