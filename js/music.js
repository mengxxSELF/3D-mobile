var musicRender =(function () {
    var $audio = $('audio'),
        oAudio = $('audio')[0],
        $music = $('.music');


    return {
        init: function () {
            $audio.on('canplay', function () {
                this.play();
            });
/* 点击播放 暂停 */
            $music.click(function () {
                if(oAudio.paused){
                    oAudio.play();
                }else{
                    oAudio.pause();
                }
                $(this).toggleClass('musicPlay');
            });
        }
    }
})();
musicRender.init();