$(function(){
	$(".phone-size").hover(function(){
		$(this).animate({"opacity":".5"}, 1000);
		// $(this).css("opacity",".5");
	}, function(){
		$(this).animate({"opacity":"1"}, 1000);
		// $(this).css("opacity","1");
	});
	$(".phone-size").click(function(){
		$(".phone-list").slideToggle(100);
	});
	$(".close").click(function(){
		$(".phone-list").slideToggle(100);
	});

	// スムーススクロール
	$("a[href^=#]:not([href=#])").click(function(){
		var target = $($(this).attr("href")).offset().top;
		target -= 50;
		$("html, body").animate({scrollTop: target}, 500);
		return false;
	})

	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$(".for-top").fadeIn(500);
		}else{
			$(".for-top").fadeOut(500);
		}
	});
});