var $ = jQuery.noConflict();
Drupal.settings.prayScrollerInterval = 7000;
Drupal.settings.prayScrollerKeepScrolling = true;
$(document).ready(function () {
    moveLinksLeft();
});


function moveLinksLeft() {
    var keepScrolling = Drupal.settings.prayScrollerKeepScrolling;
    $("#links-underneath").animate(
        {
            left: "-=390"
        },
        {
            duration: Drupal.settings.prayScrollerInterval,
            easing: "linear",
            complete: function () {
                console.log('done');
                $("#links-underneath").animate({
                    left: "+=390"
                }, 0, function () {
                    var firstPrayer = $('.scroller-prayer-link:first').clone();
                    $('.scroller-prayer-link:first').remove();
                    $(firstPrayer).appendTo('#links-underneath');
                    if(keepScrolling){
                        moveLinksLeft();
                    }

                });
            }
        }
    );
    /*
     */
}

function leftTimer() {
    setTimeout(moveLinksLeft(), 1000);
}