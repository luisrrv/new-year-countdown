var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
var countDownDate2 = new Date("May 20, 2023 00:00:00").getTime();

// countdown from input
const input = document.querySelector('.ipt');
const calcBtn = document.querySelector('.calc-btn');
const dialog = document.querySelector('dialog');

input.onfocus = function (event) {
  if(this.type==='text') this.blur(); 
  this.type = 'datetime-local';
  this.focus();
}


// end of year countdown calculation
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
  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("demo2").innerHTML = "HAPPY NEW YEAR!🎉";
    document.querySelector(".countdown h1").innerHTML = "2023";
  }
}, 1000);

// featured countdown calculation
var x2 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance3 = countDownDate2 - now;

  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance3 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo3").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";

  // If the count down is over, write some text
  if (distance3 < 0) {
    clearInterval(x2);
    document.getElementById("demo3").innerHTML = "🎉🎉🎉";
    document.querySelector(".luisxxx h1").innerHTML = "LUIS XXX";
  }
}, 1000);

// input countdown calculation
calcBtn.addEventListener('click', ()=> {
  if (input.value === '') {
    // alert('Please choose a date');
    dialog.showModal();
    return;
  }
  var x3;
  document.querySelector('.countdown.user-cd').classList.remove('hidden');

  var countDownDate3 = new Date(input.value).getTime();
  x3 = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance3 = countDownDate3 - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days2 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance3 % (1000 * 60)) / 1000);
  
    // Output the result in an element with id="demo"
    document.getElementById("demo4").innerHTML = days2 + "d " + hours2 + "h "
    + minutes2 + "m " + seconds2 + "s ";
  
    // If the count down is over, write some text
    if (distance3 < 0) {
      clearInterval(x3);
      document.getElementById("demo4").innerHTML = "TIMES UP!";
    }
    calcBtn.addEventListener('click', ()=> clearInterval(x3));
  }, 1000);

});

// Dark mode function
function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

// dark/light mode button text change
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    if(btn.innerHTML === `<i class="fas fa-sun"></i>`){
        btn.innerHTML = `<i class="fas fa-moon"></i>`;
    }else{
        btn.innerHTML= `<i class="fas fa-sun"></i>`;
    }
})




