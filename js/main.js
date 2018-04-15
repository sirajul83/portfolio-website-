function isElementInViewport(){
            var scrollTop = $(window).scrollTop();
            var viewportHeight = $(window).height();
            $('.skiller #skill:not(.html5)').each(function(){
                var top = $(this).offset().top;
                console.log(top);
                console.log(scrollTop + viewportHeight);
                if(scrollTop + viewportHeight >= top ){
                    $(this).find('.expand').addClass('html5');
                    $(this).find('.expand1').addClass('css3');
                    $(this).find('.expand2').addClass('jquery');
                    $(this).find('.expand3').addClass('photoshop');
                    $(this).find('.expand4').addClass('dreamweaver');
                    console.log(true);
                }else{
                    console.log(false);
                }
            });
        }

$(window).scroll(isElementInViewport);





// under

var $elem = $('.bar .level');
var in_view = new Waypoint.Inview({
    element: $elem[0],
    enter: function() {
        $elem.addClass('start');
    },
    exit: function() {  // optionally
        $elem.removeClass('start');
    }
});
