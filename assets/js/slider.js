class Slider {

// CONSTRUCTOR
// --------------------

  constructor (element, count) {
    this.element        = element;
    this.numberOfSlides = count;
    this.currentSlide   = 0;
  }

// METHODS
// --------------------

  goToSlide (slideNumber, slideIncrement) {
    var index = null;

    if (slideNumber)    index = slideNumber - 1;
    if (slideIncrement) index = this.currentSlide + slideIncrement;

    if (index >= 0 && index < this.numberOfSlides) {
      this.updateCurrentIndex = index;
      this.updateDom(index);
      return index;
    }

    return false;
  }

  prevSlide () {
    this.goToSlide(null, -1)
  }

  nextSlide () {
    this.goToSlide(null, 1)    
  }


  updateDom (value) {
    var $slides = $('.slide');
    var $curr   = $(this.element.children()[value]);

    $slides.removeClass('active')
    $curr.addClass('active')
  }


  set updateCurrentIndex (value) {
    this.currentSlide = value;
  }

  get currentSlideNum () {
    return this.currentSlide + 1;
  }

}


var slider;