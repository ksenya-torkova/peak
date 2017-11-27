// navbar script
var siteHeader = document.querySelector('.main-header__nav');
var siteHeaderButton = siteHeader.querySelector('.main-header__nav-btn');
var mainNav = siteHeader.querySelector('.nav');

siteHeaderButton.addEventListener('click', function() {
  siteHeaderButton.classList.toggle('main-header__nav-btn--cross');

  if (siteHeaderButton.classList.contains('main-header__nav-btn--cross')) {
    siteHeader.classList.add('main-header__nav--opened');
    mainNav.classList.add('nav--opened');
  } else {
    siteHeader.classList.remove('main-header__nav--opened');
    mainNav.classList.remove('nav--opened');
  }
});

// paginator script
var pages = document.querySelectorAll('.paginator__item:not(.paginator__item--arrow)');

var deletePageActiveClass = function () {
  var pageActive = document.querySelector('.paginator__item--active');

  if (pageActive !== null) {
    pageActive.classList.remove('paginator__item--active');
  }
};

pages.forEach(function(page, i, pages) {
  pages[i].addEventListener('click', function(evt) {
    evt.preventDefault();

    deletePageActiveClass();
    this.classList.add('paginator__item--active');
  })
});

// article slider script
$(document).ready(function(){
  $('.images-slider').slick({
    dots: false,
    prevArrow: $('.images-slider__btn--prev'),
    nextArrow: $('.images-slider__btn--next'),
    responsive: [
    {
      breakpoint: 850,
      settings: {
        dots: true
      }
    }]
  });
});

// main page slider
$(document).ready(function(){
  $('.main-slider__slides').slick({
    dots: true,
    prevArrow: $('.slider__btn--prev'),
    nextArrow: $('.slider__btn--next')
  });
});

// collection page slider script
$(document).ready(function(){
  $('.collection-page-slider-1').slick({
    dots: true,
    prevArrow: $('.slider__btn--prev'),
    nextArrow: $('.slider__btn--next'),
    responsive: [
    {
      breakpoint: 481,
      settings: 'unslick'
    }]
  });
});

// collections page sliders
$(document).ready(function(){
  $('.collection-slider-01').slick({
    dots: true,
    prevArrow: $('.collection-slider-01-btn-prev'),
    nextArrow: $('.collection-slider-01-btn-next'),
    responsive: [
    {
      breakpoint: 481,
      settings: 'unslick'
    }]
  });

  $('.collection-slider-02').slick({
    dots: true,
    prevArrow: $('.collection-slider-02-btn-prev'),
    nextArrow: $('.collection-slider-02-btn-next'),
    responsive: [
    {
      breakpoint: 481,
      settings: 'unslick'
    }]
  });

  $('.collection-slider-03').slick({
    dots: true,
    prevArrow: $('.collection-slider-03-btn-prev'),
    nextArrow: $('.collection-slider-03-btn-next'),
    responsive: [
    {
      breakpoint: 481,
      settings: 'unslick'
    }]
  });
});

// stickers script
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 450) {
      $('.sticker').removeClass('sticker--hidden');
      $('.sticker-inverse').removeClass('sticker-inverse--hidden');
    } else {
      $('.sticker').addClass('sticker--hidden');
      $('.sticker-inverse').addClass('sticker-inverse--hidden');
    }
  });
});

// cards mobile swipe script
var window_size = $(window).width();
  if(window_size <= 480) {
    $('.coll').addClass('elasticstack');
    $('.coll').attr('id', 'elasticstack');
    new ElastiStack( document.getElementById( 'elasticstack' ) );
  } else {
    $('.coll').removeClass('elasticstack');
    $('.coll').attr('id', '');
  }

$(window).resize(function() {
  var window_size = $(window).width();

  if(window_size <= 480) {
    $('.coll').addClass('elasticstack');
    $('.coll').attr('id', 'elasticstack');
    new ElastiStack( document.getElementById( 'elasticstack' ) );
  } else {
    $('.coll').removeClass('elasticstack');
    $('.coll').attr('id', '');
  }
});

var window_size = $(window).width();
  if(window_size <= 480) {
    $('.coll1').addClass('elasticstack');
    $('.coll1').attr('id', 'elasticstack1');
    new ElastiStack( document.getElementById( 'elasticstack1' ) );
  } else {
    $('.coll1').removeClass('elasticstack');
    $('.coll1').attr('id', '');
  }

$(window).resize(function() {
  var window_size = $(window).width();

  if(window_size <= 480) {
    $('.coll1').addClass('elasticstack');
    $('.coll1').attr('id', 'elasticstack1');
    new ElastiStack( document.getElementById( 'elasticstack1' ) );
  } else {
    $('.coll1').removeClass('elasticstack');
    $('.coll1').attr('id', '');
  }
});

var window_size = $(window).width();
  if(window_size <= 480) {
    $('.coll2').addClass('elasticstack');
    $('.coll2').attr('id', 'elasticstack2');
    new ElastiStack( document.getElementById( 'elasticstack2' ) );
  } else {
    $('.coll2').removeClass('elasticstack');
    $('.coll2').attr('id', '');
  }

$(window).resize(function() {
  var window_size = $(window).width();

  if(window_size <= 480) {
    $('.coll2').addClass('elasticstack');
    $('.coll2').attr('id', 'elasticstack2');
    new ElastiStack( document.getElementById( 'elasticstack2' ) );
  } else {
    $('.coll2').removeClass('elasticstack');
    $('.coll2').attr('id', '');
  }
});

// article progress bar
$(document).ready(function() {
    
  var getMax = function(){
    return $(document).height() - $(window).height();
  }
    
  var getValue = function(){
    return $(window).scrollTop();
  }
    
  if ('max' in document.createElement('progress')) {
    // Browser supports progress element
    var progressBar = $('progress');
        
    // Set the Max attr for the first time
    progressBar.attr({ max: getMax() });

    $(document).on('scroll', function(){
      // On scroll only Value attr needs to be calculated
      progressBar.attr({ value: getValue() });
    });
      
    $(window).resize(function(){
      // On resize, both Max/Value attr needs to be calculated
      progressBar.attr({ max: getMax(), value: getValue() });
    });
  
  } else {

    var progressBar = $('.progress-bar'),
        max = getMax(),
        value, width;
        
    var getWidth = function() {
      // Calculate width in percentage
      value = getValue();
      width = (value/max) * 100;
      width = width + '%';
      return width;
    }
        
    var setWidth = function(){
      progressBar.css({ width: getWidth() });
    }
        
    $(document).on('scroll', setWidth);
    $(window).on('resize', function(){
      // Need to reset the Max attr
      max = getMax();
      setWidth();
    });
  }
});
