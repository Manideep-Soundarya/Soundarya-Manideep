var countDownDate = new Date("Feb 5, 2020 21:46:00").getTime();
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("d").innerHTML=days+"d"
  document.getElementById("h").innerHTML=hours+"h"
  document.getElementById("m").innerHTML=minutes+"m"
  document.getElementById("s").innerHTML=seconds+"s"


  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("d").innerHTML=0+"d"
    document.getElementById("h").innerHTML=0+"h"
    document.getElementById("m").innerHTML=0+"m"
    document.getElementById("s").innerHTML=0+"s"
  }
}, 1000);
