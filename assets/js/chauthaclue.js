
(function ($) {
    "use strict";

    // Loader
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

    // Auto Init 
    M.AutoInit();

})(jQuery);

// Play Music
body.addEventListener('click', function () {
    $("#autoPlayMusic")[0].play();
});
const button = document.querySelector('#submitAnswer');
// button.addEventListener('click', () => {
//   button.disabled = true; // disable the button when clicked
//   let count = 10;
//   const countdown = setInterval(() => {
//     if (count === 0) {
//       clearInterval(countdown);
//       button.disabled = true; // disable the button after the countdown is over
//       return;
//     }
//     button.value = `Countdown: ${count--}`; // display the countdown on the button
//   }, 1000);
// });

// Set the countdown duration (in seconds)
const countdownDuration = 30;

// Get the countdown element from the DOM
const countdownElement = document.getElementById('countdown');

// Start the countdown
let countdown = countdownDuration;
countdownElement.textContent = countdown;
const interval = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
  if (countdown === 0) {
    clearInterval(interval);
    
    countdownElement.textContent = "Time over! Better luck next time";
    button.disabled = true; // disable the button after the countdown is over
    return;
  }
}, 1000);
// Submit Answer
$("#submitAnswer").click(function () {
    var firstTimeOut = document.getElementById("firstTimeOutside").value;
    var result = firstTimeOut.toString().toLowerCase();
    var finalResult = result.includes("soap");
    if (finalResult == true) {
        window.location.href = "moveon.html";
    }
    else {
        document.getElementById("errorHandler").innerHTML ="Wrong answer and try again";
       // button.disabled = true; 
       // return;
    }
});

console.clear();