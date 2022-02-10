$(window).on('load', function () {
  $('body').css('opacity', '1');

  $(".edf-mark").click(function () {
    const nameLevel = $(this).data("level")
    const imgurl = nameLevel.replaceAll(" ", "")
    $(this).addClass('active').siblings().removeClass("active")
    $(".edfImgLevel").attr("src",`assets/images/unidades/plantas/${imgurl}.png`)
    $(".edfLevelUrl").attr("href",`assets/images/unidades/plantas/${imgurl}.png`)
    $("#nameLevel span").text(nameLevel)
  })
});

$(window).scroll(function () {
  titleTypology()
  TypologyBg("#typology .bg1", "Monoambiente")
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
    if ($("#typology .display-2").text() != text) {
      $("#typology .display-2").fadeOut().promise().done(function () {
        setTimeout(() => {
          $("#typology .display-2").text(text).show()
        }, 50);
      })
    }
  }
}

// ------------------------------img-edf-units----------------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// ------------------------------owl-carousel--------------------------------
$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    nav:true,
})
// ------------------------------Carousel-----------------------------
const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
var stypology = new Swiper('.swiper-typ', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".advanced-gallery", {
  slidesPerView: 1,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 4,
    },
  },
})

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
  $(this).addClass("selector")
  });

$(".mybtn").click(function(){
  $(".mlocation div").addClass("active").siblings().removeClass("selector")
});

//----------------------------------------My-Chart-----------------------------
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Vendido', 'No Vendido'],
        datasets: [{
            label: ['12%','88%'],
            backgroundColor: ['#005170','#cecece'],
            borderColor: '#cecece',
            borderWidth: 0,
            data: [12,88],
        }]
    },

    // Configuration options go here
    options: {
      cutoutPercentage: 65,
      tooltips: false,
        legend: {
            display: false,
        }
    }
});
//---------------------------------Form-------------------------------
function dataSubmited(data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch("https://www.infocasas.com.uy/proyectos/torre-firenze?&formulario=1&json=1", requestOptions)
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
    utm_source: "web_firenze",
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
