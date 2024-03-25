if(window.matchMedia("(max-width:1023px)").matches){
$('.js-sukejuru').on('click', function() {
  var findElm = $(this).next(".sukejuru-info");
  $(findElm).slideToggle();

  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
});}
