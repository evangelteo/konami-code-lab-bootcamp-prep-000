const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  function konami(e) {
    if (e === codes) {
      alert('Congrats!')
    }
  }
    
    
    const body = document.querySelector('body')
    input.addEventListener('keydown',konami)
}
