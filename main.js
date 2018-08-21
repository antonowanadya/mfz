/**
 * Created by a1111 on 12/12/17.
 */
$(document).ready(function(){
    $(".but").click(function () {
        var rr = $(window).scrollTop();
        alert(rr);
    });

    $(window).scroll(function(){

        if($(window).scrollTop()>1000){
             $(".fixed").animate({right:0}, 200)
        } else {
            $(".fixed").stop(true).animate({right:-500}, 200)
        }


    })

    $(".fixed__exit").click(function(){
        $(".fixed").hide()
    })

    var currentPosition = 0;
    var slide = $(".b-slider__item")
    var numbers = slide.length;
    var slideWidth = 900;
    var width= slide.width()

    slide.wrapAll("<div class='slide__inner'></div>");
    $(".slide__inner").width(numbers*slideWidth).height(300).css({overflow:"hidden"})


    $(".b-slider__inner").prepend("<span class='control' id='control_left'>влево</span>");
    $(".b-slider__inner").append("<span class='control' id='control_right'>вправо</span>");

    manageControls(currentPosition);

    $(".control").click(function(){
        if(currentPosition==($(this).attr("id")=="control_right")){
            currentPosition=currentPosition+1;
            manageControls(currentPosition);
        } else {
            currentPosition=currentPosition-1;
            manageControls(currentPosition);
        };

        $(".slide__inner").animate({marginLeft: slideWidth*(-currentPosition)});

    })



    function manageControls(position){
        if(position==0){
            $("#control_left").hide()
        } else {
            $("#control_left").show()
        };

        if(position>2){
            $(".control_right").hide()
        } else {
            $(".control-right").show()
        }
    }



})
