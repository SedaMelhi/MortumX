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
 

const menu_items = document.querySelectorAll(".menu__item a");
const menu = document.querySelector(".menu")

menu_items.forEach(item => item.addEventListener("click", function (e) {
    
       

        let href = this.getAttribute('href').substring(1);
    
        const scrollTarget = document.getElementById(href);
        const topOffset = menu.offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
    
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    
    
}))


const btn = document.querySelector(".btn")
const module = document.querySelector(".module")
const overlay = document.querySelector(".overlay")
const close = document.querySelectorAll(".close svg")
const submit = document.querySelector(".submit")
const module2 = document.querySelector(".module2")



btn.addEventListener("click", function(){
  module.style.display = "block"
  overlay.classList.remove('overlay__end')
  overlay.classList.toggle('overlay__start')
})

module.addEventListener("click", function(event){
  if(event.target == module || event.target == close[0] || event.target == close[1]){
    overlay.classList.toggle('overlay__start')
    overlay.classList.add('overlay__end')
    setTimeout(() => module.style.display = "none", 500)
    setTimeout(() => module2.style.display = "none", 500)
  }
})

const form = document.querySelector('form')
  form.addEventListener('submit', formSend)
  async function formSend(e){
    e.preventDefault();
    let error = formValidate(form)

    let formData = new FormData(form);
   console.log(formData)
    if(error === 0){
      document.querySelector(".module2").style.display = "block";
      let response = await fetch('../sendmail.php', {
        method: 'POST',
        body: formData
      });
      if(response.ok){
        let result = await response.json();
        alert(result.message);
        form.reset();
      }else{
         alert('Ошибка')
      }
    }else{
      document.querySelector('.error-text').style.display = 'block';
    }
  }
  function formValidate(form){
    let error = 0
    let formReq = document.querySelectorAll('._req')
    for(let input of formReq){
      formRemoveError(input)
      if(input.classList.contains('_email')){
        if(emailTest(input)){
          formAddError(input)
          error++
        }
      }else if(input.value == ''){
        formAddError(input)
        error++;
      }
    }
    return error
  }
  function formAddError(input){
    input.classList.add('_error')
  }
  function formRemoveError(input){
    input.classList.remove('_error')
  }
  function emailTest(input){
    return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value)
  }