$(document).ready(function () {
    $('.burger').click(function () {
        $('.burger').toggleClass('burger-active');
        $('.rectangle__menu').toggleClass('rectangle__menu-active');
    });

    $('.rectangle__item').click(function () {
        $('.burger').removeClass('burger-active');
        $('.rectangle__menu').removeClass('rectangle__menu-active');
    });

});

