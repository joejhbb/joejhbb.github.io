/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/* Menu hidden */
if(navClose){
  navClose.addEventListener('click', () =>{  
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const LinkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove show-menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))


/*=============== ADD SHADOW HEADER ===============*/
const scrollHeader = () =>{
  constheader = document.getElementById('header')
  // add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? Headers.classList.add('shadow-header')
  : Headers.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/