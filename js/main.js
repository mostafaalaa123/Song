$(document).ready(function(){

    $(function(){
        $(".header").height($(window).height())
        $(window).resize(function(){
            $(".header").height($(window).height())

        })
        $(window).scroll(function(){
            if($(window).scrollTop()>= 200){
                $('.nav').css({
                    "backgroundColor": "#051024",
                    "padding" :  "10px 0",
                    "box-shadow": "10px 0 5px #000"
                })
            }
            else{
                $('.nav').css({
                    "backgroundColor": "transparent",
                    "padding" :  "25px 0", 
                    "box-shadow": "none"
                })
            }
            





        })


        



        $(".nav li a").on('click',function(){


            $("html, body").animate({

                scrollTop : $("#"+ $(this).data("scroll")).offset().top -90
            }, 1000)








        })
        $(".nav li a").on('click',function(){


            $(this).addClass("active").parent().siblings().find("a").removeClass("active");








        })


        $(window).scroll(function(){
            $("section").each(function(){
                if($(window).scrollTop() >= $(this).offset().top -100){


                    var secID = $(this).attr("id");
                    $("nav li a").removeClass("active");
                    $('nav li a[data-scroll="'+ secID +'"]').addClass("active");
                }


            })

            if($(window).scrollTop()>= 1000){
                $(".up").fadeIn(1000)

            }
            else{
                $(".up").fadeOut(1000)
                
            }





        })

        $(".up").on("click",function(){
            $("body, html").animate({
                scrollTop : 0
            },1000)
        })

        $(function() {  
            $("body").niceScroll({
                cursorcolor : "#e052a5",
                cursorborder : "none" ,
                zindex : "20"


            });
        });







    })


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });










})