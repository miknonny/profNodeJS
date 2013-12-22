
var timeoutTime = 2000;
var timeout = setTimeout(function() {
	console.log("timeout!")
}, timeoutTime);

setTimeout(function () {
	clearTimeout(timeout);
}, 1000);