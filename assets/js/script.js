$(document).ready(function() {

  $('.section__show-archive').click(function() {
    $(this).closest('.section').addClass('show-archive')
  })

  $('.section__hide-archive').click(function() {
    $(this).closest('.section').removeClass('show-archive')
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
})
