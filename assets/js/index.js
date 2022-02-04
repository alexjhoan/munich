$(window).on('load', function () {
  $('body').css('opacity', '1');

  $(".edf-mark").click(function () {
    const level = $(this).data("level")
    $(this).addClass('active').siblings().removeClass("active")
    $(".edfImgLevel").attr("src",`assets/images/unidades/plantas/${level}.jpg`)
    $(".edfLevelUrl").attr("href",`assets/images/unidades/plantas/${level}.jpg`)
  })
});

let offset
if (screen.width > 768){
  offset = 200
} else {
  offset = 0
}

new WOW({offset:offset, scrollContainer: null}).init()

$(".edfLevelUrl").fancybox({
  overlay : {
    closeClick : true,
  }
});

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

// fancyBox

$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "fade",
  arrows: true,
  infobar: false,
  buttons: ["zoom", "close"]
})


//$("#lightgallery a").fancybox();

$("#lightgallery .swiper-wrapper").lightGallery();


// ------------------------------Hover Location-----------------------------
$(".list-university").hover(function(){
  $(".university").css("opacity", "1");
  }, function(){
  $(".university").css("opacity", "0");
});

$(".list-public").hover(function(){
  $(".sites-public").css("opacity", "1");
  }, function(){
  $(".sites-public").css("opacity", "0");
});

$(".list-clubs").hover(function(){
  $(".clubs").css("opacity", "1");
  }, function(){
  $(".clubs").css("opacity", "0");
});
