// 计时器
var timer;
var showTime;
function createTimer(sec, callback) {
	sec = isNaN(sec) ? 0 : parseInt(sec);

	timer = setInterval(function () {
		var m = parseInt(sec / 60);
		var s = parseInt(sec % 60);
		showTime = toDub(m) + ':' + toDub(s);

		callback(sec, showTime);
		sec += 1;
	}, 1000);
}

function toDub(n) {
	return n < 10 ? '0' + n : n;
}

function clearTimer() {
	clearInterval(timer);
}