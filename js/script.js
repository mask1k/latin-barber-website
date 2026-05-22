/* =========================
   MENU MOBILE
========================= */

const menuButton = document.querySelector(".menu-button")

const mobileMenu = document.querySelector(".mobile-menu")

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active")

})

/* FECHA MENU AO CLICAR */

const mobileLinks = document.querySelectorAll(".mobile-menu a")

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active")

    })

})

/* =========================
   HEADER SCROLL
========================= */

const header = document.querySelector(".header")

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled")

    }else{

        header.classList.remove("scrolled")

    }

})

/* =========================
   REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal")

function revealSections(){

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight

        const revealTop =
        reveal.getBoundingClientRect().top

        if(revealTop < windowHeight - 100){

            reveal.classList.add("active")

        }

    })

}

window.addEventListener("scroll", revealSections)

/* EXECUTA AO CARREGAR */

revealSections()

/* =========================
   CAROUSEL
========================= */

const track = document.querySelector(".carousel-track")

const images = document.querySelectorAll(".carousel img")

const nextBtn = document.querySelector(".next")

const prevBtn = document.querySelector(".prev")

let index = 0

function updateCarousel(){

    track.style.transform =
    `translateX(-${index * 100}%)`

}

/* NEXT BUTTON */

nextBtn.addEventListener("click", () => {

    index++

    if(index >= images.length){

        index = 0

    }

    updateCarousel()

})

/* PREVIOUS BUTTON */

prevBtn.addEventListener("click", () => {

    index--

    if(index < 0){

        index = images.length - 1

    }

    updateCarousel()

})

/* =========================
   AUTO SLIDE
========================= */

setInterval(() => {

    index++

    if(index >= images.length){

        index = 0

    }

    updateCarousel()

}, 4000)

/* =========================
   TOUCH SWIPE MOBILE
========================= */

let touchStartX = 0

let touchEndX = 0

track.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX

})

track.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX

    handleSwipe()

})

function handleSwipe(){

    /* SWIPE LEFT */

    if(touchStartX - touchEndX > 50){

        index++

        if(index >= images.length){

            index = 0

        }

        updateCarousel()

    }

    /* SWIPE RIGHT */

    if(touchEndX - touchStartX > 50){

        index--

        if(index < 0){

            index = images.length - 1

        }

        updateCarousel()

    }

}