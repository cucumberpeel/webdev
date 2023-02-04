// part 1 
 $(function(){
    $("#part1").click(function(){
        $("#special").css("color", "green");
        $(".highlight").css("background-color", "yellow");
        $("p").each(function(){
            $(this).css("color", "white");
            $(this).css("background-color", "maroon");
            $(this).css("font-weight", "bold");
            alert($(this).text());
        });
    });
});

// part 2
$(function(){
    $("#part2-hide").click(function(){
        $("#part2-img").hide();
    });
    $("#part2-show").click(function(){
        $("#part2-img").show();
    });
    $("#part2-fade").click(function(){
        $("#part2-img").fadeOut(3000);
    });
});

// part 3
$(function(){
    $("#part3-animate").click(function(){
        $("div.part3").animate({
            left: '300px',
            opacity: '0.5',
            height: '+=50px',
            width: '+=50px'
        });
    });
});

// part 4
$(function(){
    $("input").change(function(){
        let $result = "";
        $("input").each(function(){
            if ($(this).val() == "") {
                alert("Please ensure all fields are complete.");
                $(this).focus();
                $(this).css("background-color", "yellow");
            }
            else {
                $result += $(this).text();
            }
        });
        $("#demo").html($result);
    });
});