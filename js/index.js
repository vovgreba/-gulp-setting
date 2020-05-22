$(document).ready(function() {
    $('#modal').click(function() {
        $('.overlay').fadeIn(500);
    });
    $('.modal__close').click(function() {
        $('.overlay').fadeOut(500);
    });
    
});

$(document).mouseup(function(e) {
    var popup = $('.modal');
    if(e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.overlay').fadeOut(500); 
    };
});

$(document).ready(function() {
    $('#jsScrollTop').click(function() {
        $('html, body').animate( {
            scrollTop: 0
        }, 2000);
    });
    $(window).scroll(function() {
        if($(window).scrollTop() > 500) {
            $('#jsScrollTop').addClass('is-show');
        } else {
            $('#jsScrollTop').removeClass('is-show');
        }
    });
});
