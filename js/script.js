window.addEventListener("load", function() {
  const body = this.document.querySelector("body")
  body.classList.add("animation")
  document.querySelector(".load").style.display = "none";
})
AOS.init()
$('.carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,  
    prevArrow: ".prev_arrow",
    nextArrow: ".next_arrow",
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1145,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
      }
    },
    {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true, 
        }
      },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
});

const carousel = document.querySelector(".carousel")
const center = document.querySelector(".slick-active")
center.classList.add('center-elem')
center.previousSibling.classList.add('center-elem')

carousel.addEventListener("mouseup", function(){
    const center = document.querySelector(".slick-active")
    for(let i of document.querySelectorAll(".center-elem")){
        i.classList.remove('center-elem')
    }
    center.previousSibling.classList.add('center-elem')
    center.classList.add('center-elem')
})
carousel.addEventListener("mouseout", function(){
    const center = document.querySelector(".slick-active")
    for(let i of document.querySelectorAll(".center-elem")){
        i.classList.remove('center-elem')
    }
    center.classList.add('center-elem')
    center.previousSibling.classList.add('center-elem')
})

$(window).resize(function() {
    const center = document.querySelector(".slick-active")
    for(let i of document.querySelectorAll(".center-elem")){
        i.classList.remove('center-elem')
    }
    center.classList.add('center-elem')
    center.previousSibling.classList.add('center-elem')
});
carousel.addEventListener("touchend", function(){
    const center = document.querySelector(".slick-active")
    for(let i of document.querySelectorAll(".center-elem")){
        i.classList.remove('center-elem')
    }
    center.classList.add('center-elem')
    center.previousSibling.classList.add('center-elem')
})
 