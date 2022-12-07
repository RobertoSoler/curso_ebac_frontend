let button = document.querySelector('#javali');
let msg = document.querySelector('#mensagem-texto');

button.addEventListener('click', ()=>{
  msg.classList.toggle('cor-azul');
})