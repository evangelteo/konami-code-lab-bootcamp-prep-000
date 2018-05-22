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
    var codescopy = codes.splice()
    if (e.key === codescopy[0]) {
      codescopy.shift()
      alert('Congrats!')
    }
  }
    
    
    const body = document.querySelector('body')
    input.addEventListener('keydown',konami)
}
