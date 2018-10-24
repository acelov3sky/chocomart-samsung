$(document).ready(function(){
    $('.toggle').click(function(){
        if($(this).children('div').hasClass('parameter-triangle--opened')) {
            $(this).children('div').removeClass('parameter-triangle--opened');
            $(this).children('h5').removeClass('title--active');
        }
        else{
            $(this).children('div').addClass('parameter-triangle--opened');
            $(this).children('h5').addClass('title--active');
        }
        $(this).nextAll('.parameter-content-wrapper').slideToggle(400, 'linear');
    });
});