$(window).on('load', function () {
  $('body').css('opacity', '1');

  $(".edf-mark").on("click touchstart" ,function () {
    const nameLevel = $(this).data("level")
    const imgurl = nameLevel.replaceAll(" ", "")
    $(this).addClass('active').siblings().removeClass("active")
    $(".edfImgLevel").attr("src",`assets/images/unidades/plantas/${imgurl}.png`)
    $(".edfLevelUrl").attr("href",`assets/images/unidades/plantas/${imgurl}.png`)
    $("#nameLevel span").text(nameLevel)
  })
  $("header .nav-link").click(function (e) {
    $("header .collapse.show").removeClass("show")
    const url = $(this).attr("href");
    if (!url.includes("html") && !url.includes("/")) {
      e.preventDefault()
      const section = $(url).offset().top;
      window.scrollTo({top: section - 65,behavior: "smooth"});
    }
  })
});

$(window).scroll(function () {
  titleTypology()
  TypologyBg("#typology .bg1", "Monoambientes")
  TypologyBg("#typology .bg2", "1 Dormitorio")
})

let offset
if (screen.width > 768){
  offset = 200
} else {
  offset = 0
}

new WOW({offset:offset, scrollContainer: null,}).init()

$(".edfLevelUrl").fancybox({
  overlay : {
    closeClick : true,
  }
});

function titleTypology() {
  const container = $("#typology");
  const heightWindow = window.innerHeight;
  const heightTop = $(container).offset().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if ((scroll > heightTop) && (scroll < heightElem + (heightTop - heightWindow))) {
    $(".titleTypology").css("position", "fixed")
    if (scroll > heightTop + (heightElem / 3)) {
      $(".titleTypology").css({"top": "auto", "bottom": "0" })
    } else {
      $(".titleTypology").css({"top": "0", "bottom": "auto" })
    }
  } else (
    $(".titleTypology").css("position", "absolute")
  )
}

function TypologyBg(section, text) {
  const container = $(section);
  const heightTop = $(container).offset().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  const move = heightTop - scroll
  if ((scroll > heightTop) && (scroll < (heightElem + heightTop))) {
    $(section).css({
        "background-attachment": "fixed",
        "background-position-y": move * .15,
      })
  } else {
    $(section).css({
      "background-attachment": "unset",
      "background-position-y": 0,
    })
  }
  if ((scroll > (heightTop - (heightElem / 2))) && (scroll < (heightTop + (heightElem / 2)))) {
    if ($(".titleTextTypology .display-2").text() != text) {
      $(".titleTextTypology .display-2").fadeOut().promise().done(function () {
        setTimeout(() => {
          $(".titleTextTypology .display-2").text(text).show()
        }, 50);
      })
    }
  }
}

// -------------------------------navbar------------------------------

function link(linkTo) {
 event.preventDefault()
 $(`.navbar-collapse.collapse.show`).removeClass("show");
 let container = $(`#${linkTo}`).offset().top;
 let heightNavBar = $(`#navbar`).height();
 let to = container - heightNavBar
 window.scrollTo(0, to);
}
// ------------------------------img-edf-units----------------------------
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// ------------------------------owl-carousel--------------------------------
$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    nav:true,
    loop: true,
})
// ------------------------------Carousel-----------------------------
const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  loop: true,
});
const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
var stypology = new Swiper('.swiper-typ', {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var bamenities = new Swiper('.swiper-amenities', {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//---------------------------------Gallery-Advance----------------------------------

if (screen.width > 768){
  $("#lightgallery").lightGallery();
  const items =  $('#lightgallery a').length;
  const imgInit = 8
  const ImgMore = 4
  $('#lightgallery a:lt('+imgInit+')').show();
  if(imgInit >= items) {
    $('.btnMore').hide()
  }
  function seeMore() {
    let visibleItems = $('#lightgallery a:visible').length + ImgMore
    $('#lightgallery a:lt('+visibleItems+')').fadeIn(800);
    if(visibleItems >= items) {
      $('.btnMore').hide();
    }
  }
}  else {
  $("#lightgallery").addClass("owl-carousel owl-theme")
  $("#lightgallery").lightGallery();
  $('#gallery .owl-carousel').owlCarousel({
    loop:false,
    margin:15,
    nav:false,
    dots: true,
    responsive:{
      0:{
        items:1
      },
      575:{
        items:2
      },
    }
  })
}


//-------------------------------- fancyBox----------------------------------

$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "fade",
  arrows: true,
  infobar: false,
  buttons: ["zoom", "close"]
})

$("#lightgallery .swiper-wrapper").lightGallery();

// ------------------------------Hover, Active Location-----------------------------
$(".ulist .list").click(function(){
  let type = $(this).data("type")
  $(`.${type}`).addClass("active").siblings().removeClass("active")
  $(this).addClass("selector").siblings().removeClass("selector")
  });

$(".mybtn").click(function(){
  $(".mlocation div").addClass("active").siblings().removeClass("selector")
});

//----------------------------------------My-Chart-----------------------------
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Vendido', 'No Vendido'],
        datasets: [{
            label: ['21%','79%'],
            backgroundColor: ['#005170','#cecece'],
            borderColor: '#cecece',
            borderWidth: 0,
            data: [21,79],
        }]
    },
    options: {
      cutoutPercentage: 65,
      tooltips: false,
        legend: {
            display: false,
        }
    }
});
//---------------------------------Form-------------------------------
// function contact() {
//   let container = $("#contact");
//   let heightTop = container.position().top;
//   let scroll = $(window).scrollTop();
//   let heightWindow = $(window).height() / 1.7;
//   if (scroll > (heightTop - heightWindow)) {
//     $("#contact .aniLe").addClass("animate__fadeInLeft")
//     $("#contact .aniRi").addClass("animate__fadeInRight")
//   }
// }
//---------------------------------Form-------------------------------
function dataSubmited(data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch("https://www.infocasas.com.uy/proyectos/torre-munich?&formulario=1&json=1", requestOptions)
  .then((json) => {
    setTimeout(()=>{
      if (json.status === 200) {
        $('#formSuccess').fadeIn();
      } else {
        $('#formError').fadeIn();
      }
      $('#formSending').hide();
    }, 2000)
  })
  .catch(error => {
    console.log('error', error);
    setTimeout(() => {
      $('#formSending').hide();
      $('#formError').fadeIn();
    }, 2000)
  });
}

function submited() {
 'use strict'
  const form = document.querySelector('#contactForm')
  const data = JSON.stringify({
    nombre: form.name.value,
    apellido: "",
    email: form.email.value,
    telefono: form.phone.value,
    tel: form.phone.value,
    source: 2,
    utm_source: "web_cliente",
    utm_medium: "munich",
    extra: form.consult.value,
    InfoLeads: 1,
    IDflow_execution: 4315
  })
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }else{
    dataSubmited(data)
    setTimeout(()=>{
      $(form).fadeOut();
      $('#formSending').fadeIn();
    },300)
  }
  form.classList.add('was-validated')
}
