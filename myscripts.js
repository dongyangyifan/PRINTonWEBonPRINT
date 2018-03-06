//resize change number
// var webinfoTest = $("#webInfo");
var screenSize;

$(window).resize(function() {
    resizeBrowser();
    webInfo();
});




$(document).ready(function() {
    $("#webInfo-7").hide();
    $("#webInfo-9").hide();
    $("#webInfo-10").hide();
    $("#webInfo-12").hide();
    $("#webInfo-129").hide();
    $("#webInfo-13").hide();
    $("#webInfo-15").hide(); 
    $("#webInfo-21").hide();  
    $("#webInfo-27").hide();
     

    resizeBrowser();
    webInfo();

    //alert page
    swal(" Drag ↑→↓← the page.  ", "Resize ⤡ the browser. ⌘P to print out.", {
        buttons: " ☞ ",

    });

    //drag paper layer
    $(".paper").draggable();

    //tooltip
    $(document).tooltip({
        track: true
    });

    // hide image 

    // hover to picture

    // $(".ten-blank").hover(function(){
    //     var imgurl = $(this).data("hoverimage");
    //     $(this).css("background-image", "url(" + imgurl + ")")
    // }, function(){
    //     $(this).css("background-image", "");
    // });

    // automatic scrolling down






    $(".lt-blank").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    });

    $(".t-blank").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    });

    $(".A4-blank").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    });

    $(".A3-blank").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    });

    $(".A5-blank").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    });

    $(".A2-blank").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    });    

    $(".A1-blank").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    }); 

    $(".A0-blank").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    });

    $(".B5-blank").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    });

    $(".B4-blank").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    });

    $(".exhibition").hover(function() {
        var imgurl = $(this).data("hoverimage");
        $(this).css("background-image", "url(" + imgurl + ")")
    }, function() {
        $(this).css("background-image", "");
    });


    //scroll start
    $("body > div.exhibition > img").hover(function() {
        /* Stuff to do when the mouse enters the element */
        if ($('.content').height() > $('.container').height()) {
            setInterval(function() { start(); }, 0);
            // setInterval(function(){ alert("Hello"); }, 3000);

            console.log("wait...");

        }
    });
    // scroll end




});

// automatic scrolling down
function animateContent(direction) {
    var animationOffset = $('.container').height() - $('.content').height();
    // var animationOffset = -7090,
        durationSpeed = 35000;

    if (direction == 'up') {
        animationOffset = 0;
        durationSpeed = 4000;
    }

    console.log("animationOffset:" + animationOffset);
    // $('.content').animate({ "marginTop": (animationOffset)+ "px" }, 5000, "linear");
    $('.content').animate({ "marginTop": (animationOffset) + "px" }, {
        duration: durationSpeed,
        specialEasing: {
            marginTop: "swing",
            // height: "easeOutBounce"
        },
    });
}

function up() {
    animateContent("up")
}

function down() {
    animateContent("down")
}

function start() {
    setTimeout(function() {
        down();
    }, 0);
    setTimeout(function() {
        up();
    }, 0);
    //    setTimeout(function () {
    //     console.log("wait...");
    // }, 2000);


}


//resize
function resizeBrowser() {
    console.log("test2");

    var winW = window.innerWidth;
    var winH = window.innerHeight,
        //scale justification
        scalePrint = 0.84,
        winHP = scalePrint * winH,
        winWP = scalePrint * winW;

    // Plugs visible window width (winW) and height (winH) into pythagorian theorym (A*A + B*B = C*C)
    var pyth = (winW * winW) + (winH * winH);
    // Find square root
//     var diag = Math.sqrt(pyth) / 96 / 15.7 * 13.3;
    var diag = Math.sqrt(pyth) / 96 / 15.7 * 38.46;
    // Number(diag).toPrecision(2);
    // var screenSize = html(Number(diag).toFixed(1);
    $(".diagonal").html(Number(diag).toFixed(1) + "''");
    screenSize = Number(diag).toFixed(1);

    // print out web exact size
    $("#printStyle").text(
        "@media print {" +
        ".web{" +
        "width:" + winWP + "px;" +
        "height:" + winHP + "px;" +
        "}" +
        "}"
    );
}




//show web info at certain inch
function webInfo() {


    if (screenSize == "13.3") {
        console.log("test");
        $("#webInfo-13").show();
        $(".diagonal").hide();
    }  else if (screenSize == "12.0") {
        console.log("test");
        $("#webInfo-12").show();
        $(".diagonal").hide();
    } else if (screenSize == "12.9") {
        console.log("test");
        $("#webInfo-129").show();
        $(".diagonal").hide();
    } else if (screenSize == "9.7") {
        console.log("test");
        $("#webInfo-9").show();
        $(".diagonal").hide();
    } else if (screenSize == "10.5") {
        console.log("test");
        $("#webInfo-10").show();
        $(".diagonal").hide();
    } else if (screenSize == "27.0") {
        console.log("test");
        $("#webInfo-27").show();
        $(".diagonal").hide();
    } else if (screenSize == "21.5") {
        console.log("test");
        $("#webInfo-21").show();
        $(".diagonal").hide();
    } else if (screenSize == "15.4") {
        console.log("test");
        $("#webInfo-15").show();
        $(".diagonal").hide();
    } else if (screenSize == "7.9") {
        console.log("test");
        $("#webInfo-7").show();
        $(".diagonal").hide();
    } 


    else {
        $("#webInfo-7").hide();
        $("#webInfo-9").hide();
        $("#webInfo-10").hide();
        $("#webInfo-13").hide();
        $("#webInfo-12").hide();
        $("#webInfo-129").hide();
        $("#webInfo-15").hide();
        $("#webInfo-21").hide();
        $("#webInfo-27").hide();
        $(".diagonal").show();
    }



}
