var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance2 = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo2").innerHTML = "EXPIRED";
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