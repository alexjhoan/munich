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
