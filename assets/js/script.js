$(document).ready(function () {
   console.log("Script loaded");
   $('div.carouselindicators button.custom-btn1').addClass('active-page');

   $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
      var slideUbication = $('div.carousel-inner div.carousel-item.active').index();

      if (slideUbication === 0) {
         $('div.carouselindicators button.custom-btn1').addClass('active-page');
         $('div.carouselindicators button.custom-btn2').removeClass('active-page');
      } else if (slideUbication === 1) {
         $('div.carouselindicators button.custom-btn1').removeClass('active-page');
         $('div.carouselindicators button.custom-btn2').addClass('active-page');
      }
   })

   $('.card-toggle-chest1').on('click', function () {
      var index = $('.card-toggle-chest1').index(this);
      $(this).toggle();

      //Condicion desaparecer titulo cuando no existan mas tarjetas
      if ($('.card-toggle-chest1:hidden').length === $('.card-toggle-chest1').length) {
         // Ocultar el título si todas las tarjetas están ocultas
         $('.title-toggle-chest').hide();
         $('#showall').removeClass('d-none');
      }
   });

   $('#showall').on('click', function () {
      $('.title-toggle-chest').show();
      $('.card-toggle-chest1').toggle();
      $(this).addClass('d-none');
   });

   $('.recipes').on('dblclick', function () {
      var index = $('.recipes').index(this);

      if (index === 0) {
         $('div h4#ingredients').addClass('text-danger');
         $('div h4#preparation').removeClass('text-danger');
      } else if (index === 1) {
         $('div h4#ingredients').removeClass('text-danger');
         $('div h4#preparation').addClass('text-danger');
      }
   });

   $('#enviarCorreoBtn').off('click').on('click', function () {
      alert('El correo se envió exitosamente.');
   });
});


document.addEventListener('DOMContentLoaded', function () {
   function initializeTooltips() {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
         return new bootstrap.Tooltip(tooltipTriggerEl)
      });
   }

   function disableTooltipsOnMobile() {
      if (window.innerWidth <= 767.98) { // Mobile screen size
         var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
         tooltipTriggerList.forEach(function (tooltipTriggerEl) {
            var tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl)
            if (tooltip) {
               tooltip.dispose()
            }
         })
      } else {
         initializeTooltips()
      }
   }

   // Initialize tooltips based on screen size
   disableTooltipsOnMobile()

   // Listen for window resize event to re-evaluate tooltips
   window.addEventListener('resize', function () {
      disableTooltipsOnMobile()
   });
});