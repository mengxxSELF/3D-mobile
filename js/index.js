/*--IMPORTANT--*/
$(document).add($('img')).on('touchmove', function (e) {
    //->阻止浏览器(图片)在滑动时候的默认行为
    e.preventDefault();
});


/*--CUBE--*/
var cubeRender = (function () {
    var $cubeBox = $('.cubeBox');

    function touchStart(e) {
        /*记录起始的坐标值*/
        var point = e.changedTouches[0];
        $cubeBox.attr({
            strX: point.pageX,
            strY: point.pageY,
            isMove: false,
            changeX: 0,
            changeY: 0
        });
    }

    function touchMove(e) {
        /*获取最新的坐标值,计算出偏移的值*/
        var point = e.changedTouches[0];
        var changeX = point.pageX - parseFloat($cubeBox.attr('strX')),
            changeY = point.pageY - parseFloat($cubeBox.attr('strY'));

        var isMove = false;
        if (Math.abs(changeX) > 10 || Math.abs(changeY) > 10) {
            isMove = true;
        }

        $cubeBox.attr({
            changeX: changeX,
            changeY: changeY,
            isMove: isMove
        });
    }

    function touchEnd(e) {
        /*结束的时候计算旋转的角度*/
        var isMove = $cubeBox.attr('isMove');
        if (isMove === 'false') return;

        var rotateX = parseFloat($cubeBox.attr('rotateX')),
            rotateY = parseFloat($cubeBox.attr('rotateY')),
            changeX = parseFloat($cubeBox.attr('changeX')),
            changeY = parseFloat($cubeBox.attr('changeY'));
        rotateY = rotateY + changeX / 3;
        rotateX = rotateX - changeY / 3;
        $cubeBox.css('transform', 'scale(0.6) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
    }

    return {
        init: function () {
            //->记录起始的旋转角度
            $cubeBox.attr({
                rotateX: 30,
                rotateY: -45
            });

            $cubeBox.on('touchstart', touchStart)
                .on('touchmove', touchMove)
                .on('touchend', touchEnd);
        }
    }
})();

$(document).ready(function () {
    cubeRender.init();
});