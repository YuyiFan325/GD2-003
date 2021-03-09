$(function() {

  $(window).scroll(function() {

    var massY = Math.min(20, 0.20+0.0004*$(this).scrollTop());

    $('.BGI').css('transform', 'scaleY(' + massY*5 + ')');
  });
});


$(document).ready(function(){
	$(".num").click(function(){
		$(".num"). toggleClass("active");
	});
});


$(document).ready(function(){
	$(".door").click(function(){
		$(".door"). toggleClass("active"),
		$(".door2"). toggleClass("active");
	});
});

$(document).ready(function(){
	$(".door2").mouseenter(function(){
		$(".out"). addClass("active"),
		$(".in"). addClass("active"),
		$(".line2"). addClass("active");
	});

	$(".line2").click(function(){
		$(".out"). removeClass("active"),
		$(".in"). removeClass("active"),
		$(".line2"). removeClass("active");
	});
});

$(document).ready(function(){
	$(".out").mouseenter(function(){
		$(".out"). animate({color: "#ffaaaa"}, "slow");
	});
});






/*
$(document).ready(function(){
	$(".door").click(function(){
		$(".left"). animate({opacity: "0"}, "slow");
	});
});

$(document).ready(function(){
	$(".leftT").mouseenter(function(){
		$(".leftT"). animate({left: "-50px"}, "slow");
	});
});

$(document).ready(function(){
	$(".door").click(function(){
		$(".door2"). animate({top: "-340px"}, "slow");
	});
});

$(document).ready(function(){
	$(".door").click(function(){
		$(".door2"). animate({opacity: "1"}, "slow");
	});
});


/*
$(document).ready(function(){
	$("#fullpage section:nth-child(10)").click(function(){
		$("#fullpage section:nth-child(10)").toggleClass("active");
	});
});

$(document).ready(function(){
	$("#fullpage section:nth-child(11)").click(function(){
		$("#fullpage section:nth-child(11)").toggleClass("active");
	});
});








$(document).ready(function(){
	$(".header").click(function(){
		$(".header").animate({
			opacity: "0.3",
			height: "10px",
			width: "15px",
		});
	});
});


$(document).ready(function(){
	$("p").click(function(){
		$("p").toggleClass("active");
	});
});

$(document).ready(function(){
	$("rightArrow").click(function(){
		var currentSlide = $(".header.active");
		var nextSlide = currentSlide.next();

		currentSlide.fadeOut(300).removeClass("active");
		nextSlide.fadeIn(300).addClass("active");
	});
});


$(document).ready(function(){
	$(".header").click(function(){
		$("body").toggleClass("dark");
		$(".eyeclock").fadeToggle(3000);
	});
});

$(document).ready(function(){
	$(".header").click(function(){
		$("main1").fadeToggle("active");
	});
});

$(document).ready(function(){
	$("button").click(function(){
		$("#main1").animate({
			left: "250px",
			opacity: "0.2",
			height: "150px",
			width: "150px"
		});
	});
});

*/