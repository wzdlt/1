$(document).ready(function() {
    $('.title div').click(function() {
        var clickedClass = $(this).attr('class'); // 获取点击元素的类名
        
        // 首先隐藏.text中所有的子div
        $('.text > div').hide();
        
        // 显示与点击元素类名相同的.text中的div
        $('.text > .' + clickedClass).show();
    });
});