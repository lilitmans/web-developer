$(document).ready(function () {
	$('.menu__li-item').hover(function(){
    	var hoverMenuItem = $(this).children('a').children('span');
    	$(hoverMenuItem).toggleClass("menu-item-hover");
  	});

});
