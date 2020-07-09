// --------- activate WOW --------------
new WOW().init();



$(document).ready(function() {
    $('#modal').click(function() {
        $('.overlay').fadeIn(500);
    });
    $('.modal__close').click(function() {
        $('.overlay').fadeOut(500);
    });
    var mySwiper = new Swiper ('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        loop: true
        
      })
    var prev = $('.swiper-button-prev'),
        next = $('.swiper-button-next'),
        bullets = $('.swiper-pagination');
    
    bullets.css('left', prev.width() + 20)
    next.css('left', prev.width() + 20 + bullets.width() + 20)

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

    // Валидация формы

    $('.modal__form').validate({
        rules: {
            userName: "required",
            userEmail: {
              required: true,
              email: true
            }
        }
    });
});
