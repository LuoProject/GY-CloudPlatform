// JavaScript Document
$(document).ready(function () {
	//Frame calculation
	$(window).resize(function(){
		$(".wrapper").css("min-height",$(window).height() +"px");
	}).resize();
});
