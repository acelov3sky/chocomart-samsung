$('.registration-sign_close-button').click(function() {
    $('#registration-sign').css({'display': 'none'})
})
$('.registration-to-login').click(function() {
    $('.login-form').css({'display': 'block'})
    $('.registration-form').css({'display': 'none'})
})
$('.login-to-registration').click(function() {
    $('.login-form').css({'display': 'none'})
    $('.registration-form').css({'display': 'block'})
})

setTimeout(function () {
    $('#registration-sign').css({'display': 'block'})
}, 1500)
