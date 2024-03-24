var windowWidth = $(window).width();
const mySwiper = new Swiper (' .swiper ', {
    loop: true, //最後に達したら先頭に戻る
    slidesPerView: '1', //何枚表示するか
    speed: 1500, // スライドアニメーションのスピード（ミリ秒）
    centeredSlides : true,
    autoplay: { // 自動再生させる
        delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
        disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
        waitForTransition: false, // アニメーションの間も自動再生を止めない
    },
} );
