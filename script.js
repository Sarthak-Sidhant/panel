// Dragging
var dragItem = null;
var dragging = false;
var xOffset = 0;
var yOffset = 0;
$(".window .titlebar").mousedown(function(event) {
	dragItem = $(this).parent();
	dragging = true;
	xOffset = event.clientX - dragItem.position().left;
	yOffset = event.clientY - dragItem.position().top;
});
$(document).mousemove(function(event) {
	if (dragging) {
		dragItem.css("left", event.clientX - xOffset);
		dragItem.css("top", event.clientY - yOffset);
	}
});
$(document).mouseup(function() {
	dragging = false;
});

// Resizing
var resizeItem = null;
var resizing = false;
var startWidth = 0;
var startHeight = 0;
var minWidth = 200;
var minHeight = 200;
$(".window .content").mousedown(function(event) {
	if (event.offsetX > $(this).width() - 10 && event.offsetY > $(this).height() - 10) {
		resizeItem = $(this).parent();
		resizing = true;
		startWidth = resizeItem.width();
		startHeight = resizeItem.height();
	}
});
$(document).mousemove(function(event) {
	if (resizing) {
		var newWidth = startWidth + event.clientX - resizeItem.offset().left
