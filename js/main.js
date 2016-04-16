
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
  
    // Fixa navbar ao ultrapassa-lo
    var start = $('#inicio'),
            distance = start.position().top + start.outerHeight(true) - 200;
        $window = $(window);
    var navbar = $('#inicio nav'),
            navheight = navbar.outerHeight(true);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').removeClass('navbar-inverse').addClass('navbar-fixed-top');
            $("body").css("padding-top", navheight+"px");
        } else {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-inverse');
            $("body").css("padding-top", "0px");
        }
    });
});