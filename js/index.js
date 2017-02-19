// 页面滑动   魔方 进行旋转
// 需要判断滑动的距离 越大旋转的越大

// 清除浏览器自带默认事件 在滑动时候的默认行为
$(document).add($('img')).on('touchmove', function (e) {
    e.preventDefault();
    //  阻止浏览器默认 以及   // 图片滑动的默认事件 会有虚影
});


var cube = (function () {
    var $cube = $('.cubeBox'); // 魔方盒子
    function touchstart (e){
        var point = e.changedTouches[0];
        console.log(point);
        //记录起始坐标值
        $cube.attr({
            strX:point.pageX, // 手指触点X
            strY:point.pageY,
            isMove:false, // 是否移动
            chengeX:0,
            chengeY:0
        });

    }
    function touchmove (e){
        /* 获取最新的偏移值*/
        var point = e.changedTouches[0];
        // 保持10px的误触误差
        $cube.attr({
            chengeX:point.pageX- parseInt($cube.attr('strX')),
            chengeY:point.pageY- parseInt($cube.attr('strY')),
        });
        if(Math.abs($cube.attr('chengeX'))>10||Math.abs($cube.attr('chengeY'))>10){
            $cube.attr({
                isMove:true
            })
        }

        //    通过attr获取的是字符串


    }
    function touchend (e){
        // 手指离开 根据是否移动 进行旋转
        var isMove =  $cube.attr('isMove'); // 这里得到的是字符串  不是布尔值 需要注意
        if(isMove=='false') return; // 不移动 则不发生行为
        // 左右滑动 控制的沿着y轴旋转  钢管舞
        // 上下滑动 控制的沿着x轴旋转  艺术体操

        /* 有一个旋转角度很大的问题 按照比例滑动*/
        var rotateX = parseInt( $cube.attr('rotateX') ),
            rotateY = parseInt( $cube.attr('rotateY')),
            chengeX = parseInt( $cube.attr('chengeX')),
            chengeY = parseInt( $cube.attr('chengeY'));

        /* 在原来的基础上 进行旋转 */
        $cube.css('transform','scale(0.6) rotateX('+(rotateX+chengeX)+'deg) rotateY('+(rotateY+chengeY)+'deg)');

        /* 当旋转角度超过360 与原有的旋转方向相反*/


    }

    return {
        init: function () {
            // 魔方盒子的起始的旋转角度
            $cube.attr({
                rotateX:30,
                rotateY:-45
            });

            $cube.on('touchstart',touchstart)
                .on('touchmove',touchmove)
                .on('touchend',touchend)
        }
    }
})();
$(document).ready(function () {
    cube.init();
});