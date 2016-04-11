
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
