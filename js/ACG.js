/**
 * Created by JS_HUAN_L on 2016/7/9 0009.
 */
//-----加载触发动画
$(function () {
    setTimeout(function () {
        $('.content').addClass('onload')
    }, 300);
    setTimeout(function () {
        $('.slide').addClass('onload')
    }, 300);
    setTimeout(function () {
        $('.txt_r').slideDown(500);
        $('.txt_l').slideDown(500);
    }, 800);
    $('.ball_l').hover(function () {
        $('.txt_l').stop().slideToggle(500)
    });
    $('.ball_r').hover(function () {
        $('.txt_r').stop().slideToggle(500)
    });

//    点击高能按钮
    $('.ball_l').stop().click(function () {
        $('.load').slideDown(800);
        setTimeout(function () {
            $('.p1').slideDown(800)
        }, 1000);
        setTimeout(function () {
            $(".p1").slideUp(800, function () {
                $(".Q1").slideDown(800);
                $(".close").fadeIn(1000)
            })
        }, 3000)
    })

    //选择
    //自己封装一个判断函数
    var myOwnJudge = function (selectT, selectF, fn) {
        $(selectT).on("click", function () {
            $(".close").fadeOut(1000);
            $(this).parent().css("box-shadow", "5px 5px 55px green").fadeOut(1000, function () {
                $(this).next().next().fadeIn(1000, fn)
                $(".close").fadeIn(1000)
            })
        });
        $(selectF).on("click", function () {

            $(".close").fadeOut(1000);
            $(this).parent().css("box-shadow", "5px 5px 55px red").fadeOut(1000, function () {
                $(this).next().fadeIn(1000, function () {
                    $(".close").fadeIn(1000)
                    setTimeout(function () {
                        $('.close').trigger('click');
                    }, 1000)
                })
            })
        });
    }
    //第一个问题
    myOwnJudge(".Q1_T", ".Q1_F");
    //第二个问题
    myOwnJudge(".Q2_T", ".Q2_F");
    //第三个问题
    myOwnJudge(".Q3_T", ".Q3_F");
    myOwnJudge(".Q4_T", ".Q4_F");
    myOwnJudge(".Q5_T", ".Q5_F");
    myOwnJudge(".Q6_T", ".Q6_F", function () {
        setTimeout(function () {
            alert("111")
        }, 1000)
    });

    //点击关闭按钮，关闭load
    $('.close').stop(true).on("click", function () {
        $(".load").hide(800, function () {
            $(".load p").css({"display": "none", "box-shadow": "5px 5px 55px #fff"})
            $(".close").css("display", "none")
        })
    })

    //作者隐藏通道
    $('.authorWay').click(function () {
        $("body").css("opacity", "0.5");
        $(".FBIwarning").fadeIn(1000)
    })


})

