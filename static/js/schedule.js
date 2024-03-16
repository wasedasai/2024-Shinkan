// if(window.matchMedia("(max-width: 1023px)").matches){
//     $(function () {
//         /*タイトルをクリックすると*/
//         $(".js-sukejuru").on("click", function() {
//       　　 /*クリックした隣の要素を開閉する*/
//           $(this).next(".sukejuru-info").slideToggle(200);
//       　　/*タイトルにopenクラスの追加、削除を行って矢印の向きを変える*/
//           $(this).toggleClass("open",200);
//         });
//       });
// }

// if(window.matchMedia("(max-width:1023px)").matches){
$('.blocktitle-green').on('click', function() {
  var findElm = $(this).next(".sukejuru-info");
  $(findElm).slideToggle();

  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
});

