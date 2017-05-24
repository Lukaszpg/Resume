var callback = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
	});
	$('.icons-red').each(function(){
		height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
	});
	
	appendMyAge();
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};

var appendMyAge = function() {
	var currentYear = (new Date).getFullYear();
	var myAge = currentYear - 1992;
	var $myAgeSpan = $("#age");
	$myAgeSpan.html("");
	$myAgeSpan.append(myAge + "yo");
};