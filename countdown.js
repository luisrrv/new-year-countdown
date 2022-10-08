var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();
var countDownDate2 = new Date("May 20, 2023 00:00:00").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance2 = countDownDate - now;
  var distance3 = countDownDate2 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

  var days2 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance3 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.getElementById("demo3").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";

  // If the count down is over, write some text
  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("demo2").innerHTML = "HAPPY NEW YEAR!!!";
  }
  if (distance3 < 0) {
    clearInterval(x);
    document.getElementById("demo3").innerHTML = "LUIS XXX !";
  }
}, 1000);

// Dark mode function
function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

// Button text change
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.innerText === "light:off"){
        btn.innerText = "light:on";
    }else{
        btn.innerText= "light:off";
    }
})
