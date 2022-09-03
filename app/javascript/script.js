let title = "javascriptが使えました。";
alert(title);

/*global $*/$(document).ready(function(){
    $('.jquery').on('click',function(){
        $(this).css('color','red');
    });
});

$(document).ready(function(){
    $('#theTarget').skippr({
        //スライドショーの変化　fade or slide
        transition: 'slide',
        //変化に係る時間ミリ秒
        speed : 1000,
        //easingの種類
        easing : 'easeOutQuart',
        //ナビゲーションの形 block or buble
        navType : 'block',
        //子要素の種類　div or img
        childrenElementType : 'div',
        //ナビゲーションの矢印表示　trueで表示
        arrows : true,
        //スライドショーの自動再生　true or false
        autPlay : true,
        //自動再生時の切り替え間隔　ミリ秒
        autPlayDuration : 3000,
        //キーボードの矢印キーによるスライド送りの設定 trueで有効
        keyboardOnAlways : true,
        //一枚目のスライド表示に戻る矢印を表示するかどうか　true or false
        hidePrevious : false
    });
});