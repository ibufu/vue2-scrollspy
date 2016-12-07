# vue2-scrollspy

Scrollspy, and animated scroll-to, for Vue2, inspired by [vue-scrollspy](https://github.com/kvdmolen/vue-scrollspy).
See https://ibufu.github.io/vue2-scrollspy/

## Installation

```
$ npm install vue2-scrollspy --save
```

## Setup

```js
import Vue from 'vue';
import Scrollspy from 'vue2-scrollspy';
Vue.use(Scrollspy);
```

## Usage

HTML:

```html
<ul>
    <li :class="{active:scrollPos == 0}">
        <a @click="$scrollTo(0)">Menu 1</a>
    </li>
    <li :class="{active:scrollPos == 1}">
        <a @click="$scrollTo(1)">Menu 2</a>
    </li>
</ul>

<div v-scroll-spy="scrollPos">
    <div>
        <h1>Header 1</h1>
        <p>Content</p>
    </div>
    <div>
        <h1>Header 2</h1>
        <p>Content</p>
    </div>
</div>
```

Javascript:

```js
new Vue({
    data: {
        scrollPos: 0
    }
})
```

### Note
If you want to set something else (not body) to scroll container, you could:
```html
<div class="container" v-scroll-spy="scrollPos">
    <div>
        <h1>Header 1</h1>
        <p>Content</p>
    </div>
    <div>
        <h1>Header 2</h1>
        <p>Content</p>
    </div>
</div>
```
```css
.container {
  position: relative;
}
```
