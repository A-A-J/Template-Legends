$(function () {

    'use strict'

    // localStorage.removeItem("mood"); //delete localStorage
    
    $("html").attr('id',localStorage.getItem("mood")??'dark');

    $('.moodWeb').on('click', function(){
        $('.moodWeb>i').toggleClass("fa-moon fa-sun");

        if ($('html').attr('id') == 'dark') {
            $('html').attr('id',"sun");
            localStorage.setItem("mood", "sun");
        } else {
            $('html').attr('id',"dark");
            localStorage.setItem("mood", "dark");
        }
    });

    Waves.init();
    Waves.attach('.B-wave', ['waves-float', 'waves-block']);

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $("header").removeClass("active");
        } else {
            $("header").addClass("active");
        }
    });

    ScrollReveal().reveal('.scrollrevealjs-ation',{
        duration: 2000,
        reset: false
    });

    $('#bnSbEmail').on('click', function(){
        $('#bnSbEmail>i').removeClass('d-none');
        $('#bnSbEmail>span').addClass('d-none');
        setTimeout(function(){
            $('#bnSbEmail>i').addClass('d-none');
            $('#bnSbEmail>span').removeClass('d-none');
            Notiflix.Notify.Success('The mailing list has been subscribed');
        },2000);
    });
});