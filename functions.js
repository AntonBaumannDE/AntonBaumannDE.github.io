$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.bannertext').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

   

    $('.bannersäule').css({
      'transform' : 'translate(0px, -'+ wScroll /50 +'%)'
    });

  });