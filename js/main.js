
//scrollbar navbar 
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}
//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})


// next page 


// const nextPage = document.querySelectorAll(".courses");
// nextPage.addEventListener("click", function(event) {
//     console.log("hello world");
// })



// owl carousel

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [2000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})




// mixitup setup

var mixer = mixitup('.mixitup-setup');




/**
 * Clients Slider
 */
new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 80
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 120
        }
    }
});
