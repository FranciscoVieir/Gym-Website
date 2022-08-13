
let openMenu = document.querySelector('.open');
let closeMenu = document.querySelector('.close');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
  let mainMenu = document.querySelector('.links');
  mainMenu.style.display = 'flex';
  mainMenu.style.rigth = '0';
}

function close() {
  let mainMenu = document.querySelector('.links');
  mainMenu.style.right = '-60%';
}