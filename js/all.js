document.addEventListener('DOMContentLoaded', function() {
    // banner轮播图
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',   // 分页器的css选择器
    paginationClickable: true,          // 分页器是否可以点击
    spaceBetween: 30,                   // slide之间的距离
    centeredSlides: true,               // 活动块居中
    autoplay: 2500,                     // 自动播放
    loop: true,                         // 循环
    autoplayDisableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
});

// 新闻工具图片轮播
var swiper1 = new Swiper('.body-left', {
    slidesPerView: 1, // 或者你设置为其他配置
    control: swiper2,   // 使用control配置项来指定控制的Swiper实例
    pagination: '.swiper-pagination1',  // 分页器的css选择器
    paginationClickable: true,  // 分页器是否可以点击
    spaceBetween: 30,    // slide之间的距离
    centeredSlides: true,   // 活动块居中
    autoplayDisableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
    loop: true,     // 循环 
});

// 新闻工具文字轮播
var swiper2 = new Swiper('.body-right', {
    slidesPerView: 1, // 或者你设置为其他配置
    control: swiper1,  // 使用control配置项来指定控制的Swiper实例
    paginationType: 'fraction', // 设置为分式
    pagination: '.swiper-pagination1',  // 分页器的css选择器
    nextButton: '.swiper-button-next',  // 下一个按钮的css选择器
    prevButton: '.swiper-button-prev',  // 上一个按钮的css选择器
    paginationClickable: true,  // 分页器是否可以点击
    spaceBetween: 30,       // slide之间的距离
    centeredSlides: true,       // 活动块居中
    autoplay: 2500,             // 自动播放
    autoplayDisableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
    loop: true,                 // 循环
});

// 马院精神轮播
var swiper = new Swiper('.swiper', {
    pagination: '.swiper-pagination2',  // 分页器的css选择器
    slidesPerView: 5,   // 设置slider容器能够同时显示的slides数量(carousel模式)
    paginationClickable: true,  // 分页器是否可以点击
    spaceBetween: 10,   // slide之间的距离
    autoplay: 2200,     // 自动播放
    loop: true      // 循环
});
});

$(function () {
    // 设置校验动态鼠标经过右边文字左边图片切换
    $("ul li").mouseover(function () {
        var index = $(this).index();    // 获取当前li的索引
        $(".left_ div").eq(index).show();   // 显示当前li对应的div
        $(".left_ div").eq(index).siblings().hide();  // 隐藏其他的div
    })

    // 设置活动主题鼠标经过上移
    $(".commer-zhuti .etc li").on('mouseenter', function () {
        $(this).stop().animate({
            top: -25,   // 设置上移25px
        }, 400);
    });
    // 设置活动主题鼠标经过上移
    $(".commer-zhuti .etc li").on('mouseleave', function () {
        $(this).stop().animate({
            top: 0,   // 设置上移0px
        }, 400);
    });
})


$(document).ready(function() {
    // 设置手机端点击显示下拉菜单   
    $('.header-button').click(function () {
        $('.yc').toggle();  // 切换显示和隐藏
    });
    // 设置PC端点击搜索按钮显示搜索框
    $('.search').click(function () {
        $('.search-box').toggle();  // 切换显示和隐藏
    });
});

// 师资队伍面包屑点击切换内容
$(document).ready(function() {
    $('.title .one').on('click', function() {
        // 切换.body-three和.body-one的显示状态
        $('.body-three').hide();    // 隐藏
        $('.body-one').show();      // 显示
        $('.body-two').hide();      // 隐藏
        // 更换.one的背景图片
        $('.two').css('background-image', 'url(./img/two.png)'); // 替换为新的图片路径
        $('.three').css('background-image', 'url(./img/three.png)'); // 替换为新的图片路径
        // 更换.two的背景图片
        $('.one').css('background-image', 'url(./img/one-red.png)'); // 替换为新的图片路径
    });
    $('.title .two').on('click', function() {
        // 切换.body-three和.body-one的显示状态
        $('.body-three').hide();    // 隐藏
        $('.body-one').hide();      // 隐藏
        $('.body-two').show();      // 显示
        // 更换.one的背景图片
        $('.one').css('background-image', 'url(./img/one.png)'); // 替换为新的图片路径
        $('.three').css('background-image', 'url(./img/three.png)'); // 替换为新的图片路径
        // 更换.two的背景图片
        $('.two').css('background-image', 'url(./img/two-red.png)'); // 替换为新的图片路径
    });
    $('.title .three').on('click', function() {
        // 切换.body-three和.body-one的显示状态
        $('.body-three').show();    // 显示
        $('.body-one').hide();      // 隐藏
        $('.body-two').hide();      // 隐藏
        // 更换.one的背景图片
        $('.one').css('background-image', 'url(./img/one.png)'); // 替换为新的图片路径
        $('.two').css('background-image', 'url(./img/two.png)'); // 替换为新的图片路径
        // 更换.two的背景图片
        $('.three').css('background-image', 'url(./img/three-red.png)'); // 替换为新的图片路径
    });
})