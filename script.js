// Variables

let hamburger = document.querySelector('.hamburger-menu');
let popUp = document.querySelector('.pop-up');
let closeIcon = document.querySelector('.close-icon');
let portfolioBtn = document.querySelector('li:nth-child(1)')
let aboutBtn = document.querySelector('li:nth-child(2)')
let contactBtn = document.querySelector('li:nth-child(3)')


// Events

hamburger.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
portfolioBtn.addEventListener('click', goToPortfolio);
aboutBtn.addEventListener('click', goToAbout);
contactBtn.addEventListener('click', goToContact);

function openMenu() {
  popUp.classList.add('active-pop-up');
  closeIcon.classList.add('close-active');
}

function closeMenu() {
  popUp.classList.remove('active-pop-up');
  closeIcon.classList.remove('close-active');
}


