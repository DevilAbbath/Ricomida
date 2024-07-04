$(document).ready(function () {
   console.log("Script loaded");
   $('div.carouselindicators button.custom-btn1').addClass('active-page');

   $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
      console.log("Slide Changed");
      var slideUbication = $('div.carousel-inner div.carousel-item.active').index();

      if (slideUbication === 0) {
         console.log('Page ' + slideUbication + ' Show')
         $('div.carouselindicators button.custom-btn1').addClass('active-page');
         $('div.carouselindicators button.custom-btn2').removeClass('active-page');
      } else if (slideUbication === 1) {
         console.log('Page ' + slideUbication + ' Show')
         $('div.carouselindicators button.custom-btn1').removeClass('active-page');
         $('div.carouselindicators button.custom-btn2').addClass('active-page');
      }
   })
});

document.addEventListener('DOMContentLoaded', function () {
   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
   })
})