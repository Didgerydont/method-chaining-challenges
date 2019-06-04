$(document).ready(function() {

    $("#button1").mouseenter(function(){
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$("#button1").mouseleave(function(){
		$("#button1").removeClass("makeBorder").addClass("makeRed");
	});
	
	$("button").click(function(){
	    $("#para1").slideToggle("fast");
	});
});