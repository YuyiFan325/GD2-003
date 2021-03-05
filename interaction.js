$(document).ready(function(){
	$('#C0').mouseover(function(){
		$("#C1").css(
			"transform", "scaleY(25)", 
			"border-radius", "0%",
    		"transition-delay", ".3s;",
    		"transition-duration", "5s"
    		);
	});
	$('#C0').mouseout(function(){
		$("#C1").css(
			"transform", "scaleY(1)", 
			"border-radius", "20%",
    		"transition-delay", ".3s;",
    		);
	});
});

$(document).ready(function(){
	$('#C0').mouseover(function(){
		$("#C2").css(
			"transform", "scaleY(25)", 
			"border-radius", "0%",
    		"transition-delay", ".6s;");
	});
	$('#C0').mouseout(function(){
		$("#C2").css(
			"transform", "scaleY(1)", 
			"border-radius", "20%",
    		"transition-delay", ".6s;");
	});
});

$(document).ready(function(){
	$('#C0').mouseover(function(){
		$("#C3").css(
			"transform", "scaleX(25)", 
			"border-radius", "0%",
    		"transition-delay", ".9s;");
	});
	$('#C0').mouseout(function(){
		$("#C3").css(
			"transform", "scaleX(1)", 
			"border-radius", "20%",
    		"transition-delay", ".9s;");
	});
});

$(document).ready(function(){
	$('#C0').mouseover(function(){
		$("#C4").css(
			"transform", "scaleX(25)", 
			"border-radius", "0%",
    		"transition-delay", "2.1s;");
	});
	$('#C0').mouseout(function(){
		$("#C4").css(
			"transform", "scaleX(1)", 
			"border-radius", "20%",
    		"transition-delay", "2.1s;");
	});
});

$(document).ready(function(){
	$('#C0').mouseover(function(){
		$("#C5").css(
			"transform", "scaleX(55)", 
			"border-radius", "0%",
    		"transition-delay", "1.5s;");
	});
	$('#C0').mouseout(function(){
		$("#C5").css(
			"transform", "scaleX(1)", 
			"border-radius", "20%",
    		"transition-delay", "1.5s;");
	});
});

$(document).ready(function(){
	$('#C0').mouseover(function(){
		$("#C6").css(
			"transform", "scale(15)", 
			"border-radius", "0%",
    		"transition-delay", "1.8s;");
	});
	$('#C0').mouseout(function(){
		$("#C6").css(
			"transform", "scale(1)", 
			"border-radius", "20%",
    		"transition-delay", "1.8s;");
	});
});

$(document).ready(function(){
	$('#C0').mouseover(function(){
		$("#C7").css(
			"transform", "scale(25)", 
			"border-radius", "0%",
    		"transition-delay", "2.1s;",
			"opacity", "20%");
	});
	$('#C0').mouseout(function(){
		$("#C7").css(
			"transform", "scale(1)", 
			"border-radius", "20%",
    		"transition-delay", "2.1s;",
			"opacity", "100%");
	});
});