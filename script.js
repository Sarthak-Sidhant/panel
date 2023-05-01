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
		var newHeight = startHeight + event.clientY - resizeItem.offset().top;
		if (newWidth < minWidth) {
			newWidth = minWidth;
		}
		if (newHeight < minHeight) {
			newHeight = minHeight;
		}
		resizeItem.width(newWidth);
		resizeItem.height(newHeight);
	}
});
$(document).mouseup(function() {
	resizing = false;
});

// Minimizing and restoring
$(".window .titlebar .buttons a.minimize").click(function() {
	var window = $(this).parents(".window");
	window.addClass("minimized");
});
$("#taskbar li").click(function() {
	var window = $("#" + $(this).data("window-id"));
	window.removeClass("minimized");
	window.addClass("active");
	window.siblings(".window").removeClass("active");
});

// Closing
$(".window .titlebar .buttons a.close").click(function() {
	$(this).parents(".window").remove();
	$("#taskbar li[data-window-id='" + $(this).parents(".window").attr("id") + "']").remove();
});

// Fullscreen
$(".window .titlebar .buttons a.fullscreen").click(function() {
	var window = $(this).parents(".window");
	if (!window.hasClass("fullscreen")) {
		window.addClass("fullscreen");
		$(this).html("&#x2198;");
	} else {
		window.removeClass("fullscreen");
		$(this).html("&#x2196;");
	}
});

// Creating new windows
$("#compiler-button").click(function() {
	createWindow("compiler.html", "Compiler");
});
$("#calculator-button").click(function() {
	createWindow("calculator.html", "Calculator");
});
$("#fitness-calculator-button").click(function() {
	createWindow("fitness-calculator.html", "Fitness Calculator");
});
$("#notes-button").click(function() {
	createWindow("notes.html", "Notes");
});
$("#todo-button").click(function() {
	createWindow("todo.html", "To-Do List");
});
$("#calendar-button").click(function() {
	createWindow("calendar.html", "Calendar");
});

