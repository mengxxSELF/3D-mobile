var musicRender =(function () {
    var $audio = $('audio'),
        oAudio = $('audio')[0],
        $music = $('.music'),
        $cube=$('.box');


    return {
        init: function () {
            $audio.on('canplay', function () {
                this.play();
                $music.addClass('musicPlay').css({opacity:1});
            });
/* 点击播放 暂停 */
            $music.tap(function () {
                if(oAudio.paused){
                    oAudio.play();
                }else{
                    oAudio.pause();
                }
                $(this).toggleClass('musicPlay');
            });
            /* 点击盒子*/
            $cube.tap(function () {
                $(this).toggleClass('touchMove');
                timer = setTimeout(function () {
                    $cube.removeClass('touchMove');
                },3000)
            })
        }
    }
})();
musicRender.init();