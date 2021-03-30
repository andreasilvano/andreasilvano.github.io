$(document).ready(function() {

  $('.section__show-archive').click(function() {
    $(this).closest('.section').addClass('show-archive')
  })

  $('.section__hide-archive').click(function() {
    $(this).closest('.section').removeClass('show-archive')
  })

  $('.top-bar__disable-compact').click(function() {
    $('body').removeClass('compact')
  })

  $('.top-bar__enable-compact').click(function() {
    $('body').addClass('compact')
  })

  $('.grid__item')
    .mouseenter(function() {
      if ($(this).find('video').length > 0) {
        $(this).find('video')[0].play()
      }

      var dataset = $(this)[0].dataset;

      Object.keys(dataset).map((key, index) => {
        var value = dataset[key];
        if (value !== '') {
          $('.details__'+ key +'-val').html(value)
          $('.details__'+ key).removeClass('hidden')
        } else {
          $('.details__'+ key).addClass('hidden')
        }
      })
      $('.details').addClass('slided')
    })
    .mouseleave(function() {
      if ($(this).find('video').length > 0) {
        $(this).find('video')[0].pause()
      }

      $('.details').removeClass('slided')
    })


  // Slider
  // --------------

  var $slides    = $('.slides');
  if ($slides.length) {

    var slideCount = $slides.children().length;
    slider = new Slider($slides, slideCount);

    document.addEventListener('keydown', function(e) {

      switch (e.key) {

        case 'ArrowRight':
          slider.nextSlide();
          break;
        case 'ArrowLeft':
          slider.prevSlide();
          break;
        case 'ArrowUp':
          slider.goToSlide(null, -10);
          break;
        case 'ArrowDown':
          slider.goToSlide(null, 10);
          break;
        default:
          return false;
      }
    })
  }

})
