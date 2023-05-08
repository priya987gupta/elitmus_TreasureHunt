
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
 const button = document.querySelector('#submitAnswer');

const countdownDuration = 30;


const countdownElement = document.getElementById('countdown');


let countdown = countdownDuration;
countdownElement.textContent = countdown;
const interval = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
  if (countdown === 0) {
    clearInterval(interval);
    
    countdownElement.textContent = "Time over! Better luck next time";
    button.disabled = true; 
    return;
  }
}, 1000);

$("#submitAnswer").click(function () {
    var ruleTrivia = document.getElementById("ruleTrivia").value;
    var result = ruleTrivia.toString().toLowerCase();
    var finalResult = result.includes("titanic");
    if (finalResult == true) {
        window.location.href = "riddle4.html";
    }
    else {
        document.getElementById("errorHandler").innerHTML ="Wrong answer and try again";
       
    }
});

console.clear();