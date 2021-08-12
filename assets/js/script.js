const navmenu = document.getElementById('nav-menu')
const navtoggle = document.getElementById('nav-toggle') 
const navclose = document.getElementById("nav-close")

if(navtoggle){
    navtoggle.addEventListener('click', () =>{
        navmenu.classList.add('show-menu')
    })
}

if(navclose){
    navclose.addEventListener('click', () =>{
        navmenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const skillscontent = document.getElementsByClassName('skills_content')
const skillsheader = document.querySelectorAll('.skills_header')

function toggleskills(){
    let itemclass = this.parentNode.className

    for(i = 0; i < skillscontent.length; i++){
        skillscontent[i].className = 'skills_content skills_close'
    }

    if (itemclass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsheader.forEach((el) =>{
    el.addEventListener('click', toggleskills)
})


var swiper = new Swiper(".swiper-container", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'light-theme'
const iconTheme = 'uil-toggle-off'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-toggle-on' : 'uil-toggle-off'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-toggle-on' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

gsap.registerPlugin(ScrollTrigger)

gsap.from('.home_img', {
    opacity: 0,
    duration:2,
    delay: .3,
    y:-50,
    scrollTrigger: {trigger: '.home', start: "top 100%", end: "bottom 25%", toggleActions: "restart reverse restart reverse"}
})

gsap.from('.home_data,.home_social-icon', {
    opacity: 0,
    duration:2,
    delay: .6,
    y:25,
    scrollTrigger: {trigger: '.home', start: "top 100%", end: "bottom 25%", toggleActions: "restart reverse restart reverse"}
})

gsap.from('.home_title, .home_subtitle, .home_description, .home_button, .home_scroll' , {
    opacity: 0,
    duration:2,
    delay: .8,
    y:25,
    ease:'expo.out',
    stagger:.2,
    scrollTrigger: {trigger: '.home', start: "top 100%", end: "bottom 25%", toggleActions: "restart reverse restart reverse"}
})

gsap.from('.nav_logo,.change-theme' , {
    opacity: 0,
    duration:2,
    delay: 1.2,
    y:25,
    ease:'expo.out',
})

gsap.from('.nav_item' , {
    opacity: 0,
    duration:2,
    delay: 1.5,
    y:25,
    ease:'expo.out',
    stagger:.1
})
gsap.from('.nav_toggle' , {
    opacity:0,
    duration:1.1,
    delay: 1.6,
    ease:'expo.out',
})

gsap.from('.about' , {
    opacity: 0,
    duration:2,
    delay: .4,
    y:25,
    ease:'expo.out',

    scrollTrigger: {trigger: '.about', start: "top 75%", end: "bottom 25%", toggleActions: "restart reverse restart reverse"}
})

gsap.from('.skills' , {
    opacity: 0,
    duration:2,
    delay: .4,
    y:25,
    ease:'expo.out',

    scrollTrigger: {trigger: '.skills', start: "top 75%", end: "bottom 25%", toggleActions: "restart reverse restart reverse"}
})

gsap.from('.services' , {
    opacity: 0,
    duration:2,
    delay: .4,
    y:25,
    ease:'expo.out',

    scrollTrigger: {trigger: '.services', start: "top 75%", end: "bottom 25%", toggleActions: "restart reverse restart reverse"}
})
gsap.from('.project' , {
    opacity: 0,
    duration:2,
    delay: .4,
    y:25,
    ease:'expo.out',

    scrollTrigger: {trigger: '.project', start: "top 75%", end: "bottom 25%", toggleActions: "restart reverse restart reverse"}
})
gsap.from('.contact' , {
    opacity: 0,
    duration:2,
    delay: .4,
    y:-15,
    ease:'expo.out',

    scrollTrigger: {trigger: '.contact', start: "top 75%", end: "bottom 25%", toggleActions: "restart reverse restart reverse"}
})