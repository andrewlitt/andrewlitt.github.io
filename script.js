
// Wrap every letter in a span
var textWrapper = document.querySelector('.animate-1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|'|,)/g, "<span class='letter'>$&</span>");

var x = window.matchMedia("(max-width: 700px)")
if(!x.matches){
  anime.timeline({loop: false})
    .add({
      targets: '.card-intro',
      opacity: 1,
      easing:'easeInQuad',
      duration: 300
    }).add({
      targets: '',
      duration: 200
    }).add({
      targets: '.animate-1 .letter',
      rotateY: [-90, 0],
      duration: 1000,
      delay: function(el, i) {
        return 40 * i;
      }
    }).add({
      targets: '.animate-2',
      opacity: 1,
      easing:'easeInOutSine',
      duration: 500
    }).add({
      targets: '.animate-3',
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
}
else{
  var elements = document.getElementsByClassName('clear');
  while(elements.length > 0){
    elements[0].classList.remove('clear');
  }
}
