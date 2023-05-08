
(function ($) {
    "use strict";

    
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

     
    M.AutoInit();

})(jQuery);


body.addEventListener('click', function () {
    $("#autoPlayMusic")[0].play();
});


$("#startJourney").click(function () {
    window.location.href = "riddle1.html";
});

console.clear();