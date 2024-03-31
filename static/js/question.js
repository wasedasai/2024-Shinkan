if(window.matchMedia("(max-width:1023px)").matches){
    $('.js-question').on('click', function() {
      var findElm = $(this).next(".question-info");
      $(findElm).slideToggle();
    
      if($(this).hasClass('close')){
        $(this).removeClass('close');
      }else{
        $(this).addClass('close');
      }
    });}