
function nextMsg() {
    if (messages.length == 0) {
        // once there is no more message, do whatever you want
        messages = [
		    "TE",
		    "NOS"
		].reverse();

		nextMsg();
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
        $('#message-ch').html(messages.pop()).fadeIn(1000).delay(1200).fadeOut(1000, nextMsg);
    }
};
// list of messages to display
var messages = [
    "TE",
    "NOS"
].reverse();


/*! Main */
$( document ).ready(function() {
  
    var start = $('#inicio'),
            distance = $(window).height() + 10;
    $window = $(window);
    var navbar = $('#inicio nav'),
            navheight = navbar.outerHeight(true);

    resizeDiv();

    var animStat = 0;

    $window.scroll(function() {

        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').removeClass('navbar-inverse').addClass('navbar-fixed-top');
            $("body").animate({
                paddingTop: navheight/2+"px"
            }, 300);
        } else if ($window.scrollTop() == 0) {
            $("body").finish();
            navbar.removeClass('navbar-fixed-top').addClass('navbar-inverse');
            $("body").css("padding-top", "0px");
        }

        else {
            if (animStat == 1){
                $("body").promise().done(function() {
                    navbar.removeClass('navbar-fixed-top').addClass('navbar-inverse');
                    $("body").css("padding-top", "0px");
                });
            }
            else {
                navbar.removeClass('navbar-fixed-top').addClass('navbar-inverse');
                $("body").stop(false,true);
                $("body").css("padding-top", "0px");
            }
            
        } 
    });

    $( ".mouse-see" ).click(function(event) {
        event.preventDefault();
        var href = $(this).attr('href');
        animStat = 1;
        $("html, body").animate({
            scrollTop: $(href).offset().top - navheight
        }, {duration: 1000, complete:  function() { animStat = 0; } });
    });

    $( ".wemade-gallery a" ).click(function(event) {
        event.preventDefault();
        animStat = 1;
        $("body").finish();
        $("html, body").animate({
            scrollTop: $('#nosotros .wemade-gallery').offset().top - navheight
        }, {duration: 1000, complete:  function() { animStat = 0; } });
    });


});

window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    wpw = $(window).width();
    wbot = $('.bot-center').width();

    vph = $(window).height();
    vnav = $('nav').height();

    galh = $('.gal-col').height();
    console.log(galh);

    vcnt = $('title-h1').height();
    margin = (vph - vnav - vcnt) / 4;

    $('#inicio').css({'height': vph + 'px'});
    $('.centered').css({'margin-top': margin + 'px'});
    $('.bot-center').css({'left': (wpw - wbot) / 2 + 'px'});

    if ( $(".wemade-gallery").length ) {
 
        $(".wemade-gallery").css({'height': galh + 'px'});
    }

}

