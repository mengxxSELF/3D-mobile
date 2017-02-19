// ҳ�滬��   ħ�� ������ת
// ��Ҫ�жϻ����ľ��� Խ����ת��Խ��

// ���������Դ�Ĭ���¼� �ڻ���ʱ���Ĭ����Ϊ
$(document).add($('img')).on('touchmove', function (e) {
    e.preventDefault();
    //  ��ֹ�����Ĭ�� �Լ�   // ͼƬ������Ĭ���¼� ������Ӱ
});


var cube = (function () {
    var $cube = $('.cubeBox'); // ħ������
    function touchstart (e){
        var point = e.changedTouches[0];
        //��¼��ʼ����ֵ
        $cube.attr({
            strX:point.pageX, // ��ָ����X
            strY:point.pageY,
            isMove:false, // �Ƿ��ƶ�
            chengeX:0,
            chengeY:0
        });

    }
    function touchmove (e){
        /* ��ȡ���µ�ƫ��ֵ*/
        var point = e.changedTouches[0];
        // ����10px�������
        $cube.attr({
            chengeX:point.pageX- parseInt($cube.attr('strX')),
            chengeY:point.pageY- parseInt($cube.attr('strY')),
        });
        if(Math.abs($cube.attr('chengeX'))>10||Math.abs($cube.attr('chengeY'))>10){
            $cube.attr({
                isMove:true
            })
        }

        //    ͨ��attr��ȡ�����ַ���


    }
    function touchend (e){
        // ��ָ�뿪 �����Ƿ��ƶ� ������ת
        var isMove =  $cube.attr('isMove'); // ����õ������ַ���  ���ǲ���ֵ ��Ҫע��
        if(isMove=='false') return; // ���ƶ� �򲻷�����Ϊ
        // ���һ��� ���Ƶ�����y����ת  �ֹ���
        // ���»��� ���Ƶ�����x����ת  �������

        /* ��һ����ת�ǶȺܴ������ ���ձ�������*/
        var rotateX = parseInt( $cube.attr('rotateX') ),
            rotateY = parseInt( $cube.attr('rotateY')),
            chengeX = parseInt( $cube.attr('chengeX')),
            chengeY = parseInt( $cube.attr('chengeY'));

        /* ��ԭ���Ļ����� ������ת */
        $cube.css('transform','scale(0.6) rotateX('+(rotateX+chengeX)+'deg) rotateY('+(rotateY+chengeY)+'deg)');

        /* ����ת�Ƕȳ���360 ��ԭ�е���ת�����෴*/


    }

    return {
        init: function () {
            // ħ�����ӵ���ʼ����ת�Ƕ�
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