$(window).on('load', function () {
  $('body').css('opacity', '1');
});

let offset

if (screen.width > 768){
  offset = 200
} else {
  offset = 0
}

new WOW({offset:offset, scrollContainer: null}).init()

// ------------------------------img-edf-units----------------------------

function click(id) {
  $(".activeLevel").removeClass("activeLevel");
  $(".activeText").removeClass("activeText");
  setTimeout(() => {
    $(`#${id}`).addClass("activeLevel");
    $(`.${id}`).addClass("activeText");
    $("#changeImg").attr("src",`assets/images/unidades/plantas/${id}.png`)
    $("#changeImgUrl").attr("href",`assets/images/uniddes/plantas/${id}.png`)
  },10)
}

$(document).ready(function() {
  $("#changeImgUrl").fancybox({
    overlay : {
      closeClick : true,
    }
  });
})

// ------------------------------img-edf-units----------------------------
$('#exampleModalCenter').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

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
    loop:true,
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

// fancyBox

$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "fade",
  arrows: true,
  infobar: false,
  buttons: ["zoom", "close"]
});
