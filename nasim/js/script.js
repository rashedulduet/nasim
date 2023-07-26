
$(function(){
$('#banner').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow:true,
  centerMode:true,
  centerPadding: '0px',
  autoplay: false,
  asNavFor:'.text_div', 
  prevArrow:'<i class="fas fa-arrow-left icon left"></i>',
  nextArrow:'<i class="fas fa-arrow-right icon right"></i>', 
  });

    $('.text_div').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:false,
    fade:true, 
    asNavFor:'#banner', 
        
             
  });
})