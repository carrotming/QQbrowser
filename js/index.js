$(function () {
    var $index = 0, timer = null;
    $('section').eq($index).removeClass('current');
    showAndHide($index);
    // 监听屏幕滚动,使用jquery插件的mousewheel
    $(window).mousewheel(function (event, delta) {
        //节流
        clearTimeout(timer);
        timer = setTimeout(function () {
            $index -= delta;
            if ($index > $('.round li').length) {
                $index = $('.round li').length;
            } else if ($index < 0) {
                $index = 0;
            }
            $('.round li').eq($index).addClass('active').siblings().removeClass('active');
            $('section').eq($index).stop().show().siblings('section').stop().hide();
            setTimeout(function () {
                $('section').eq($index).removeClass('current').siblings('section').addClass('current');
                showAndHide($index);
            },50)
        }, 300)
    });
    //小圆点点击
    $('.round li').click(function () {
        $index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('section').eq($index).stop().show().siblings('section').stop().hide();
        setTimeout(function () {
            $('section').eq($index).removeClass('current').siblings('section').addClass('current');
            showAndHide($index);
        },10)
        showAndHide($index);
    });
    //具体元素的隐藏和显示
    function showAndHide(index) {
        if (index == 0) {
            $('.logo').hide();
            $('.scroll').show();
            $('.bigLogo').show();
        } else {
            $('.logo').show();
            $('.scroll').hide();
            $('.bigLogo').hide();
        }
    }
});