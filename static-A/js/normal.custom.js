// JavaScript Document
function SmoothlyMenu() {
    $("body").hasClass("mini-navbar") ? $("body").hasClass("fixed-sidebar") ? ($(".side-menu").hide(), setTimeout(function() {
        $(".side-menu").fadeIn(500)
    },
    300)) : $(".side-menu").removeAttr("style") : ($(".side-menu").hide(), setTimeout(function() {
        $(".side-menu").fadeIn(500)
    },
    100))
}
$(document).ready(function () {
	//Frame calculation
	$(window).resize(function(){
		$(".wrapper").css("min-height",$(window).height() +"px");
		$(".menuScrollbar").css("height",($(window).height()-$(".logo").outerHeight())+"px");
		$(".main-content").css("height",($(window).height()-$(".navbar-static-top").outerHeight()-$(".breadcrumb").outerHeight()-$(".footer").outerHeight())+"px");
	}).resize();
	
	//menu Custom Scrollbar
	$(window).load(function(){
		$(".menuScrollbar").mCustomScrollbar({
			theme:"dark-3"
		});
	});
	
	//Handle minimalize left menu
	$(".navbar-minimalize").click(function() {
        $("body").toggleClass("mini-navbar"),
        SmoothlyMenu();
    });
   
	//Collapse left menu
	$('.nav-second').on('show.bs.collapse', function () {
        $('.nav-second.in').collapse('hide');
    });
    $("#side-menu > li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	$(".nav-second > li").click(function(){
		$(".nav-second").find("li").removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
	});
});
