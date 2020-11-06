$(document).ready(function() {
    $(".cancel").hide();
    $(".reply-input").hide();
    $(".reply-btn").hide();
    //Like Script
    $('.like').click(function() {
        $(this).toggleClass('text-danger');
    });
    //Reply Show Hide
    $('.reply').click(function() {
        $(".cancel").hide();
        $(".reply-input").hide();
        $(".reply-btn").hide();
        $(this).siblings().toggle();
    });
    //Cancel Reply
    $('.cancel').click(function() {
        $(this).siblings().hide();
        $(this).hide();
        $('.reply').show()
    });
    var offset = 100;
    var duration = 500;
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset) {
            $(".back-to-top").fadeIn(duration);
        } else {
            $(".back-to-top").fadeOut(duration);
        }
    });

    //Scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() < 100 || $(this).scrollTop() > $(document).height() - $(window).height() - 100) {
            $('.back-to-top').fadeOut();
        } else {
            $('.back-to-top').fadeIn();
        }
    });
});