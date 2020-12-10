document.addEventListener("DOMContentLoaded", function() {


  
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="slick-btn banner-section__slider-btn banner-section__slider-btnprev" ><img src="./images/dest/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn banner-section__slider-btn banner-section__slider-btnnext" ><img src="./images/dest/arrow-right.svg" alt=""></button>',
    adaptiveHeight: true,    
  });


  $('.tab').on('click', function(e){
    e.preventDefault();
    
    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs').siblings().find('div')).removeClass('tabs-content--active');
    
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');
  });


  $('.product-item__like-it').on('click',function(){    
    $(this).toggleClass('product-item__like-it-active');
  })


  $('.product-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    prevArrow: '<button class="slick-btn product-slider__slider-btn product-slider__slider-btnprev" ><img src="./images/dest/arrow-left-black.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn product-slider__slider-btn product-slider__slider-btnnext" ><img src="./images/dest/arrow-right-black.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  })


  $('.filter-style').styler();  



  $('.filter-item-drop, .filter__extra, .footer__item-drop').on('click', function(){
    $(this).toggleClass('filter-item-drop--active');
    $(this).next().slideToggle(400);
  })


  $(".js-range-slider").ionRangeSlider({
    type: "double",
  });


  $('.btn-checked .aside-filter__content-label .checked').parent()
  .toggleClass('btn-checked__white-color');  
  $('.btn-checked .aside-filter__content-label').on('click', function(){    
    $(this).toggleClass('btn-checked__white-color');
  })


  $('.catalog__filter-btngrid').on('click', function(){
    $(this).addClass('filter-btn--ative');
    $('.catalog__filter-btnline').removeClass('filter-btn--ative');
    $('.product-item').removeClass('product-item--list');
  })
  $('.catalog__filter-btnline').on('click', function(){
    $(this).addClass('filter-btn--ative');
    $('.catalog__filter-btngrid').removeClass('filter-btn--ative');
    $('.product-item').addClass('product-item--list');
  })


  $(".rate-yo").rateYo({
    rating    : 1.6,
    readOnly: true,
    spacing: "7px",
    starWidth: "23px",
    normalFill: "#c4c4c4",
    ratedFill: "#1C62CD",
  });
   
  $('.menu__btn').on('click', function(){
    $(this).toggleClass('menu__btn--active');
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  })

  $('.catalog__filter-btnfilter').on('click', function(){    
    $('.catalog__inner-aside').slideToggle();
  })  

  $('.card__list-addres').on('click', function(){
    $(this).siblings().slideToggle();
  })

});
