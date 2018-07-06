$(document).ready(function(){
fullSize();	
/********* Sticky Header ************/	
$(window).scroll(function(){
  var sticky = jQuery('body'),
	  scroll = jQuery(window).scrollTop();	
  if(scroll >= 200) sticky.addClass('sticky-header');
  else sticky.removeClass('sticky-header');	
});

/********* Full Height Js ************/
function fullSize() {
  var heights = window.innerHeight;
 $(".fullHt").css('min-height', (heights + 0) + "px");
}
/********* Mobile Menu ************/
$(".mob-menu").click(function(){
  $("body").toggleClass("open-main-menu"); 	
  $("body").removeClass("open-mob-search"); 
});

$(".mob-search").click(function(){
  $("body").toggleClass("open-mob-search"); 
  $("body").removeClass("open-main-menu"); 	
});

$(".coupon-bottom li").click(function(){

  if($(".show-data").hasClass("open-show-data"))
  {
    $(".show-data").removeClass("open-show-data")
  }
  else{
   $(".show-data").find("open-show-data").removeClass("open-show-data") 
  $(".show-data").addClass("open-show-data")
  }
})     
/********* Show Data ************/	
$(".coupon-meta p").click(function(){
  $(this).toggleClass("coupon-meta-show-desc")
});
$(".cou-mer-head p").click(function(){
  $("body").toggleClass("cou-mer-head-show-desc")
});

/********* Sliders ************/	
$('.banner-slider').owlCarousel({
	  loop:true,
	  items:1,
	  nav:false,
	  dots:false,
	  autoplay:true,
	  autoplayTimeout:5000,
	  smartSpeed:2500,
	  navText: [
				 "<i class='fa fa-angle-left'></i>",
				 "<i class='fa fa-angle-right'></i>"
			   ],
			   
});
$('.searc-modl-slider').owlCarousel({
	  loop:true,
	  items:3,
	  nav:true,
	  dots:false,
	  autoplay:true,
	  margin:10,
	  autoplayTimeout:5000,
	  smartSpeed:2500,
	  navText: [
				 "<i class='fa fa-angle-left'></i>",
				 "<i class='fa fa-angle-right'></i>"
			   ],
			   
});

jQuery('#inner-ban-slide').owlCarousel({
	  loop:true,
	  items:1,
	  nav:false,
	  dots:false,
	  autoplay:true,
	  margin:10,
	  autoplayTimeout:5000,
	  smartSpeed:2500,
	  navText: [
				 "<i class='fa fa-angle-left'></i>",
				 "<i class='fa fa-angle-right'></i>"
			   ],
			   
});

$('#banner-slider').owlCarousel({
	  loop:true,
	  items:3,
	  nav:true,
	  dots:false,
	  autoplay:true,

	  autoplayTimeout:5000,
	  smartSpeed:2500,
	  navText: [
				 "<i class='fa fa-long-arrow-left'></i>",
				 "<i class='fa fa-long-arrow-right'></i>"
			   ],
			   
});


/********* Cust tab ************/	
$(function() {
  //Simple filter controls
  $('.simplefilter li').click(function() {
	  $('.simplefilter li').removeClass('active');
	  $(this).addClass('active');
  });
  //Multifilter controls
  $('.multifilter li').click(function() {
	  $(this).toggleClass('active');
  });
  //Shuffle control
  $('.shuffle-btn').click(function() {
	  $('.sort-btn').removeClass('active');
  });
  //Sort controls
  $('.sort-btn').click(function() {
	  $('.sort-btn').removeClass('active');
	  $(this).addClass('active');
  });
});

});
