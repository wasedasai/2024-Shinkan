jQuery(function($){
    var navFlg = true;
    var clickflug = true;//最初はtrue(クリック受け付ける)
    $('.menu').on('click',function(){
        if(clickflug){
            clickflug = false;
            $('.menu__line').toggleClass('active');
            $('.bar').toggleClass('active');
            $('.gnav').css({
                'display' : 'block',
            });
            if(navFlg){
                navFlg = false;

                setTimeout(function(){
                    clickflug = true;
                },400);//200ミリ秒立ったらtrueになる

            }
            else{
                $('.gnav').css({
                    'display' : 'none',
                });

                navFlg = true;
                clickflug = true;//初期値に戻したらtrue(初期化完了,一瞬)
            }
        }else{
            return false;
        }
    });
});