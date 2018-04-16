import TWEEN from '@tweenjs/tween.js'

const requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
})()

function animate () {
  if (TWEEN.update()) {
    requestAnimationFrame(animate)
  }
}

requestAnimationFrame(animate)

export const Easing = TWEEN.Easing

export function scrollWithAnimation (scrollEl, current, target, time, easing) {
  new TWEEN.Tween({ postion: current })
    .to({ postion: target }, time)
    .easing(easing)
    .onUpdate(function (val) {
      scrollEl.scrollTop = val.postion
    })
    .start()

  animate()
}
