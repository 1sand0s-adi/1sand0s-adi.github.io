

$(document).ready(function(){
	
	
	var l1=l2=l3=l4=l5=0;
	

     $(window).load(function(){
                     $("#main_content").mCustomScrollbar({theme:"3d"});
                  });

     $("#nav1").children().mouseenter(function(){
     	$.playSound('sounds/select2');
     });

	$(".content_background").width($("#main_content").width()+10+"px");
	$("a.list1").click(function(){
		$(".drop1").slideToggle('fast');
		if(l1%2==0)
		{
			$("#down1").addClass("rotated");
			$("a.list1").addClass("selected1");
		}
		else
		{
			$("#down1").removeClass("rotated");
			$("a.list1").removeClass("selected1");
		}
		l1++;

	});
	$(".selected").parent().prependTo("#nav1").delay(800);

	$("a.list2").click(function(){
		$(".drop2").slideToggle('fast');
		if(l2%2==0)
		{
			$("#down2").addClass("rotated");
			$("a.list2").addClass("selected1");
		}
		else
		{
			$("#down2").removeClass("rotated");
			$("a.list2").removeClass("selected1");
		}
		l2++;

	});
	$("a.list3").click(function(){
		$(".drop3").slideToggle('fast');
		if(l3%2==0)
		{
			$("#down3").addClass("rotated");
			$("a.list3").addClass("selected1");
		}
		else
		{
			$("#down3").removeClass("rotated");
			$("a.list3").removeClass("selected1");
		}
		l3++;

	});
	$("a.list4").click(function(){
		$(".drop4").slideToggle('fast');
		if(l4%2==0)
		{
			$("#down4").addClass("rotated");
			$("a.list4").addClass("selected1");
		}
		else
		{
			$("#down4").removeClass("rotated");
			$("a.list4").removeClass("selected1");
		}
		l4++;

	});
	$("a.list5").click(function(){
		$(".drop5").slideToggle('fast');
		if(l5%2==0)
		{
			$("#down5").addClass("rotated");
			$("a.list5").addClass("selected1");
		}
		else
		{
			$("#down5").removeClass("rotated")
			$("a.list5").removeClass("selected1");
		}
		l5++;

	});

});
