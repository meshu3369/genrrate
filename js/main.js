/**
 * Created by meshu on 12/1/2016.
 */

/* javascript code for website loading icon */
$(window).on("load", function () {
    $(".se-pre-con").fadeOut("slow");
});
/* javascript code for website loading icon */



/*
 *   Hide the context menu and Keyboard Interaction
 * */
 $(document).on('keypress keydown keyup', function(e) {
 e.preventDefault();
 });
 $(document).contextmenu(function() {
 return false;
 });
/* == end == */


$(document).ready(function () {



    /*
     *  navbar hiding when scroll down...
     * */

    $(".navbar-fixed-top").autoHidingNavbar();

    /* *  === end ===== */


    /*
     *  When clicking on the play video cover photo
     *  it redirect to the youtube embed player
     *  by this code...
     * */
    $(".ssimage").click(function (ev) {
        ev.preventDefault();
        $(".video_cover").hide();
        $(".video_file").show();
        $("#video")[0].src += "?autoplay=1";
    });

    /* == end === */


    /*  go to top button blinking code
     *   interval function ..
     * */


    var i = 0;

    function blinking() {

        if (i == 1) {
            $("#scrollUp1 span i").css({
                "color": "#ff7000",
                "transform": "translate(0px,-5px)"
            });
            i = 0;
        } else {
            $("#scrollUp1 span i").css({
                "color": "#f2f2f2",
                "transform": "translate(0px,0px)",
            });
            i = 1;
        }

    }

    //set an interval
    setInterval(blinking, 600);

    blinking();

    /*
     *   end of  blinking code ######
     * */


    /*
     *  counting number plugin initialization
     * */

    $('span .counter').counterUp({
        delay: 10, // the delay time in ms
        time: 3000 // the speed time in ms
    });


});  //end of ready function ..
