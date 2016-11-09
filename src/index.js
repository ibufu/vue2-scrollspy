/**
 * Created by lingchenxuan on 16-11-9.
 */
let scrollSections = [];

function init(el) {
    scrollSections = [0];
    const sections = el.children;
    for (let i = 0; i < sections.length; i++){
        if(sections[i].offsetTop > 0){
            scrollSections.push(sections[i].offsetTop)
        }
    }
}

const scrollSpyContext = '@@scrollSpyContext';

export default function install(Vue) {
    Vue.directive('scroll-spy', {
        bind: function(el, binding, vnode) {
            init(el);
            function onScroll() {
                const pos = el.scrollTop;
                let i = 0;
                while (pos >= scrollSections[i]) {
                    i++;
                }

                vnode.context.$data[el[scrollSpyContext].expression] = i ? i - 1 : 0
            }

            function scrollTo(index) {
                const current = el.scrollTop;
                const target = scrollSections[index];
                const time = 200;
                const steps = 30;
                const timems = parseInt(time / steps);
                const gap = target - current;
                for (let i=0; i <= steps; i ++) {
                    const pos = current + (gap / steps) * i;
                    setTimeout(() => el.scrollTop = pos, timems * i)
                }
                // el.scrollTop = target;
            }
            vnode.context.$scrollTo = scrollTo;

            el[scrollSpyContext] = {
                onScroll,
                expression: binding.expression
            };
        },
        inserted: function (el) {
            el.addEventListener('scroll', el[scrollSpyContext].onScroll);
        },
        componentUpdated: function(el) {
            init(el);
        },
        unbind: function(el) {
            el.removeEventListener('scroll', el[scrollSpyContext].onScroll);
        }
    });
}
