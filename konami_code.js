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
    }
    else {
      codescopy = codes.splice()
    }
    if (codescopy.length === 0) {
      alert('Congrats!')
      codescopy = codes.splice()
    }
  }

    const body = document.querySelector('body')
    body.addEventListener('keydown', konami)
}
