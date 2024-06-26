$(document).ready(function() {
    $('.title div').click(function() {
        var clickedClass = $(this).attr('class');
        $('.text > div').hide();
        $('.text > .' + clickedClass).show();
    });
});