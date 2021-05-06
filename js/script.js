$(document).ready(function (){
    $('.header_burger').click(function (event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('look');
    })
    $('.slider_reveiw').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000
    });
    $('.slider_mentors').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000
    });

    $('.slider_course').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 850 ,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

        ]
    });
});
