var hero = $(".hero_area");
var menu = $(".custom_menu-container");
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > hero.height()) {
        menu.addClass("menu_fixed-position");
        $(".custom_menu-container + section").addClass("mt-5");
    } else {
        menu.removeClass("menu_fixed-position");
        $(".custom_menu-container + section").removeClass("mt-5");
    }
});


var myCircle = Circles.create({
    id: "circles-1",
    radius: 65,
    value: 85,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-2",
    radius: 65,
    value: 55,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-3",
    radius: 65,
    value: 65,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-4",
    radius: 65,
    value: 85,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


$(document).ready(function(){
    $('.technology-use').slick({
        slidesToShow: 7,
        slidesToScroll: -1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// light box
$(document).ready(function() {
    var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});