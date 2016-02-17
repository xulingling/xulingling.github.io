$(document).ready(function() {

	// 导航滑动
	var workT=0;
	$(window).scroll(function(event){
		 var numTop=$(document).scrollTop();
		 /*var aboutTop=$("#about").offset().top-80;
		 var skillTop=$("#skill").offset().top-100;
		 var workTop=$("#work").offset().top-100;
		 var resumeTop=$("#resume").offset().top-100;
		 var selfTop=$("#self").offset().top-100;*/
		 var aboutTop=$("#about").offset().top-10;
		 var skillTop=$("#skill").offset().top-10;
		 var workTop=$("#work").offset().top-10;
		 var resumeTop=$("#resume").offset().top-10;
		 var selfTop=$("#self").offset().top-10;
		 $("#nav ul li a").eq(0).click(function(event) {
		 	$("html,body").stop().animate({scrollTop: aboutTop},700)
		 	
		 });

		 $("#nav ul li a").eq(1).click(function(event) {
		 	$("html,body").stop().animate({scrollTop: skillTop},700)
		 	
		 });

		 $("#nav ul li a").eq(2).click(function(event) {
		 	$("html,body").stop().animate({scrollTop: workTop},700)
		 	
		 });

		 $("#nav ul li a").eq(3).click(function(event) {
		 	$("html,body").stop().animate({scrollTop: resumeTop},700)
		 	
		 });

		 $("#nav ul li a").eq(4).click(function(event) {
		 	$("html,body").stop().animate({scrollTop: selfTop},700)
		 	
		 });


		 // about特效
		 if(numTop>=aboutTop){
		 	$(".skill_mid1").addClass('skill_mid1_r');
		 	$(".skill_bor").addClass('skill_borp');
		 }else{
		 	$(".skill_mid1").removeClass('skill_mid1_r');
		 	$(".skill_bor").removeClass('skill_borp');
		 }

		 // 技能特效
		 if(numTop>=skillTop+280){
		 	$(".skill_mid1").addClass('skill_mid1_rF');
		 	$(".skill_bor").addClass('skill_borpF');			
		 	$(".skill_bor").addClass('skill_borp2');
		 }else{
		 	$(".skill_mid1").removeClass('skill_mid1_rF');
		 	$(".skill_bor").removeClass('skill_borpF');
		 	$(".skill_bor").removeClass('skill_borp2');
		 }

		 // 作品特效
		 if(numTop>=skillTop+200){
		 	$(".work_con1").addClass('work_con1x');
		 }else{
		 	$(".work_con1").removeClass('work_con1x');
		 }

		 if(numTop>=resumeTop){
		 	$(".work_con1").addClass('work_con1s');

		 }else{
		 	$(".work_con1").removeClass('work_con1s');
		 }

		 workT=workTop;

		 // 自我评价
		  if(numTop>=selfTop+10){
		  	$(".self_con").addClass('self_conh');
		  }else{
		  	$(".self_con").removeClass('self_conh')
		  }
	});

	
	$(".resume_ul li").mouseover(function() {
		var widths=$(this).index()+1;
		if(widths==1){
			$(".yuandian").stop().animate({left:330},200)
		}else if(widths==2){
			$(".yuandian").stop().animate({left:500},200)
		}else if(widths==3){
			$(".yuandian").stop().animate({left:650},200)
		}

		$(".resume_xqcon").eq($(this).index()).show().siblings().hide();
	});

	//浏览作品
	$(".work_img a").click(function(event) {
		var lujing=$(this).children('img').attr("src"); 
		
		$(".work_imgshow").stop().fadeIn(500);
		$(".work_imgshow img").attr("src",lujing);

		$(".work_imgshow img").scrollTop(0);
		$("html,body").stop().animate({scrollTop: 0}, 0);
		var high=$(".workimg").children('.work_show').height();
		//var heights=high+300;
		// $(".work_imgshow").css('height',heights);
		var bod=$("body").height();
		$(".work_imgshow").css({"height":bod+103});
	});

	$(".workimg p").click(function(event) {
		$(".work_imgshow").stop().fadeOut(500);
		$("html,body").stop().animate({scrollTop: workT}, 0)

	});


	$(window).scroll(function(e){
		var bTop=$(document).scrollTop();
		if (bTop>=1000) {
			$("#goback").fadeIn();
		}else{
			$("#goback").fadeOut();
		}
	});
	$("#goback").click(function(event) {
		$("html,body").stop().animate({scrollTop: 0}, 1000)
	});


//时间
    var oIpt=document.getElementById('ipt1');
	tick();
	setInterval(tick,1000);	
	function tick(){
		var d=new Date();
		
		var hours=d.getHours();
		hours=fillZero(hours);
		var minutes=d.getMinutes();
		minutes=fillZero(minutes);
		var seconds=d.getSeconds();
		seconds=fillZero(seconds);
	
		oIpt.value=hours+':'+minutes+':'+seconds;	
	}

});
function fillZero(n){
	return n<10?'0'+n:''+n;
}

	
