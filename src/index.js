/**
 * Created by lingchenxuan on 16-11-9.
 */
let scrollSections = [];

const bodyScrollEl = {};

// For ff, ie
Object.defineProperty(bodyScrollEl, 'scrollTop', {
    get() {
        return document.body.scrollTop || document.documentElement.scrollTop;
    },
    set(val) {
        document.body.scrollTop = val;
        document.documentElement.scrollTop = val;
    }
});

function init(el) {
    scrollSections = [];
    const sections = el.children;
    if (sections[0] && sections[0].offsetParent !== el) {
        el[scrollSpyContext].eventEl = window;
        el[scrollSpyContext].scrollEl = bodyScrollEl;
    }

    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop >= 0) {
            scrollSections.push(sections[i].offsetTop)
        }
    }
}

const scrollSpyContext = '@@scrollSpyContext';

export default function install(Vue) {
    Vue.directive('scroll-spy', {
        bind: function(el, binding, vnode) {
            function onScroll() {
                const { scrollEl, expression } = el[scrollSpyContext];
                const pos = scrollEl.scrollTop;
                let i = 0;
                while (pos >= scrollSections[i]) {
                    i++;
                }

                vnode.context.$data[expression] = i ? i - 1 : 0
            }

            function scrollTo(index) {
                const { scrollEl } = el[scrollSpyContext];
                const current = scrollEl.scrollTop;
                const target = scrollSections[index];
                const time = 200;
                const steps = 30;
                const timems = parseInt(time / steps);
                const gap = target - current;
                for (let i = 0; i <= steps; i ++) {
                    const pos = current + (gap / steps) * i;
                    setTimeout(() => scrollEl.scrollTop = pos, timems * i);
                }
            }
            vnode.context.$scrollTo = scrollTo;

            el[scrollSpyContext] = {
                onScroll,
                expression: binding.expression,
                eventEl: el,
                scrollEl: el
            };
        },
        inserted: function (el) {
            init(el);

            const { eventEl, onScroll } = el[scrollSpyContext];
            eventEl.addEventListener('scroll', onScroll);
        },
        componentUpdated: function(el) {
            init(el);
        },
        unbind: function(el) {
            const { eventEl, onScroll } = el[scrollSpyContext];
            eventEl.removeEventListener('scroll', onScroll);
        }
    });
}
