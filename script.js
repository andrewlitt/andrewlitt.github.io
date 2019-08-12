// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|'|,)/g, "<span class='letters'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.intro-card',
    opacity: 1,
    easing:'easeInQuad',
    duration: 300
  }).add({
    targets: '',
    duration: 200
  }).add({
    targets: '.ml10 .letters',
    rotateY: [-90, 0],
    duration: 1000,
    delay: function(el, i) {
      return 40 * i;
    }
  }).add({
    targets: '.ml11',
    opacity: 1,
    easing:'easeInOutSine',
    duration: 500
  }).add({
    targets: '.ml12',
    opacity: 1,
    easing:'easeInOutSine',
    duration: 500
  });

anime({
  targets: '.arrow',
  translateY: 8,
  scale: 1.2,
  duration: 2000,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});
