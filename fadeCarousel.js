var translateWidth=0;
var countSlide=$('#long-block').children().length-3;
var slideInterval=3000;
var slideNow=1;

function nextSlide(){
	if(slideNow==countSlide||slideNow<=0||slideNow>countSlide){
		console.log('if');
		$('#long-block').css('transform','translate(0,0)');
		slideNow=1;
	}else{
		console.log('else')
		translateWidth=(-$('.slide').outerWidth()-4)*slideNow;
		$('#long-block').css({
			"transform":"translate("+translateWidth+"px,0)",
			"webkit-transform":"translate("+translateWidth+"px,0)",
			"-ms-transform":"translate("+translateWidth+"px,0",
		});
		slideNow++;
	}
}

function prevSlide(){
	if(slideNow==1||slideNow<=0||slideNow>countSlide){
		translateWidth=(-$('.slide').outerWidth()-4)*(countSlide-1);
		$('#long-block').css({
			"transform":"translate("+translateWidth+"px,0)",
			"webkit-transform":"translate("+translateWidth+"px,0)",
			"-ms-transform":"translate("+translateWidth+"px,0",
		});
		slideNow=countSlide;
	}else{
		translateWidth=(-$('.slide').outerWidth()-4)*(slideNow-2);
		$('#long-block').css({
			"transform":"translate("+translateWidth+"px,0)",
			"webkit-transform":"translate("+translateWidth+"px,0)",
			"-ms-transform":"translate("+translateWidth+"px,0",
		});
		slideNow--;
	}
}

$(document).ready(function(){
	var switchSlide=setInterval(nextSlide,slideInterval);
	$('#carousel-background').hover(function(){
		clearInterval(switchSlide);
	},function(){
		switchSlide=setInterval(nextSlide,slideInterval);
	})
	
	$('#btn-next').click(function(){
		nextSlide();
	})
	
	$('#btn-prev').click(function(){
		prevSlide();
	})
})