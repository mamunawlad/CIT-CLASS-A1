$(function () {
    $(`#banner`).slick({
    arrows: false,
    dots: true,
    dotsClass: `container bannerDots`,
    });

    //BOOTSTRFAP TOOLTIPS

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  //NEW PRODUCT SLIDER

  $(`.productSlider`).slick({
    arrows: false,
    slidesToShow: 4,


    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
  
        }
      },


      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
  
        }
      },


      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
  
        }
      },
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  $(".Coundown")
.countdown("2024/01/01", function(event) {
  $(`.days`).html(event.strftime('%D '));
  $(`.hours`).html(event.strftime('%H '));
  $(`.minuts`).html(event.strftime('%M '));
  $(`.sec`).html(event.strftime('%S '));

    
  
});

$('#daydeals').slick({
  arrows: false,
    dots: true,
    dotsClass: `container daydealsDots`,
});


new VenoBox({
  selector: ".venobox",
  share: true,
  
});




    });

