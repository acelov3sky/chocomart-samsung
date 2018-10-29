$(document).ready(function(){
    $('.toggle').click(function(){
        if($(this).children('div').hasClass('parameter-triangle--opened')) {
            $(this).siblings('div').addClass('parameter-content-wrapper--closed');
            $(this).siblings('div').removeClass('parameter-content-wrapper--opened');
            $(this).children('div').removeClass('parameter-triangle--opened');
            $(this).children('h5').removeClass('title--active');
        }
        else{
            $(this).siblings('div').removeClass('parameter-content-wrapper--closed');
            $(this).siblings('div').addClass('parameter-content-wrapper--opened');
            $(this).children('div').addClass('parameter-triangle--opened');
            $(this).children('h5').addClass('title--active');
        }
        // $(this).nextAll('.parameter-content-wrapper').toggle(400, 'linear');
    });
});