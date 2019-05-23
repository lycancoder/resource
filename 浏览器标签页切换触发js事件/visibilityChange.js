// visibilitychange事件是浏览器新添加的一个事件，
// 当浏览器的某个标签页切换到后台，
// 或从后台切换到前台时就会触发该消息，
// 现在主流的浏览器都支持该消息了，
// 例如Chrome, Firefox, IE10等
window.onload = function () {
	var hiddenProperty;
	if ('hidden' in document) {
		hiddenProperty = 'hidden';
	} else if ('webkitHidden' in document) {
		hiddenProperty = 'webkitHidden';
	} else if ('mozHidden' in document) {
		hiddenProperty = 'mozHidden';
	} else {
		hiddenProperty = null;
	}

	var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');

	document.addEventListener(visibilityChangeEvent, function () {
		if (!document[hiddenProperty]) {
			console.log('当前窗口已切换至前台，已激活');
			// self.location.reload();
		} else {
			console.log('当前窗口已切换至后台，未激活');
			// self.location.reload();
		}
	});
};