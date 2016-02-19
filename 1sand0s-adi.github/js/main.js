/* ========================================================================= */
/*  Preloader Script
/* =========================================================================

window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
} */

$(function(){
    /* ========================================================================= */
    /*  Menu item highlighting
    /* ========================================================================= */
   var l=0;
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 400) {
            jQuery("#navigation").css("background-color","#000000");
            jQuery("#navigation").addClass("animated-nav");
        } else {
            jQuery("#navigation").css("background-color","transparent");
            jQuery("#navigation").removeClass("animated-nav");
        }
    });
     jQuery(document).ready(function(){
        if(l!=2){
        jQuery('a.lis2').on('click', function(event) {   
            
             jQuery('.content'+l).toggle('hide');
             jQuery('.content2').toggle('show');
             
             $("a.lis"+l).removeClass("selected");
             $("a.lis2").addClass("selected");
             $(".selected").parent().prependTo("#nav1").delay(800);
             l=2;
            

        });}
    });
    jQuery(document).ready(function(){
        if(l!=1){
        jQuery('a.lis1').on('click', function(event) {   
             
             jQuery('.content'+l).toggle('hide');
             jQuery('.content1').toggle('show');
             
             $("a.lis"+l).removeClass("selected");
             $("a.lis1").addClass("selected");
             $(".selected").parent().prependTo("#nav1").delay(800);
             l=1;
             
         });}
    });
    jQuery(document).ready(function(){
        if(l!=3){
        jQuery('a.lis3').on('click', function(event) {   
            
             jQuery('.content'+l).toggle('hide');     
             jQuery('.content3').toggle('show');
             
             $("a.lis"+l).removeClass("selected");
             $("a.lis3").addClass("selected");
             $(".selected").parent().prependTo("#nav1").delay(800);
             l=3;
             
         });}
    });
    jQuery(document).ready(function(){
        if(l!=4){
        jQuery('a.lis4').on('click', function(event) {   
             jQuery('.content'+l).toggle('hide');   
             jQuery('.content4').toggle('show');
             
             $("a.lis"+l).removeClass("selected");
             $("a.lis4").addClass("selected");
             $(".selected").parent().prependTo("#nav1").delay(800);
             l=4;
         });};
    });
    jQuery(document).ready(function(){
        if(l!=5){
        jQuery('a.lis5').on('click', function(event) {   
             jQuery('.content'+l).toggle('hide');     
             jQuery('.content5').toggle('show');
             $("a.lis"+l).removeClass("selected");
             $("a.lis5").addClass("selected");
             $(".selected").parent().prependTo("#nav1").delay(800);
             l=5;
         });}
    });
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


     $(window).load(function(){
                     $(".no-js").mCustomScrollbar({theme:"3d"});
                  });

    $('#nav').onePageNav({
        filter: ':not(.external)',
        scrollSpeed: 950,
        scrollThreshold: 1
    });

    // Slider Height
    var slideHeight = $(window).height();
    $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);
    });

    // portfolio filtering

    $("#projects").mixItUp();

    //fancybox

    $(".fancybox").fancybox({
        padding: 0,

        openEffect : 'elastic',
        openSpeed  : 650,

        closeEffect : 'elastic',
        closeSpeed  : 550,
    });


    /* ========================================================================= */
    /*  Facts count
    /* ========================================================================= */

    "use strict";
    $(".fact-item").appear(function () {
        $(".fact-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

/* ========================================================================= */
/*  On scroll fade/bounce fffect
/* ========================================================================= */

    $("#testimonial").owlCarousel({
        pagination : true, // Show bullet pagination
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

});

/* ========================================================================= */
/*  On scroll fade/bounce fffect
/* ========================================================================= */

    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false
    });
    wow.init();

/* ---------------------------------------------------------------------- */
/*      Progress Bars
/* ---------------------------------------------------------------------- */

initProgress('.progress');

function initProgress(el){
    jQuery(el).each(function(){
        var pData = jQuery(this).data('progress');
        progress(pData,jQuery(this));
    });
}


            
function progress(percent, $element) {
    var progressBarWidth = 0;
    
    (function myLoop (i,max) {
        progressBarWidth = i * $element.width() / 100;
        setTimeout(function () {   
        $element.find('div').find('small').html(i+'%');
        $element.find('div').width(progressBarWidth);
        if (++i<=max) myLoop(i,max);     
        }, 10)
    })(0,percent);  
}   
