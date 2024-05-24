var currentYear = new Date().getFullYear();
var countUpDate = new Date(`Jan 1, ${currentYear} 00:00:00`).getTime();

// Update the count down every 1 second
var countUpLabel = document.getElementById("demo1");
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance1 =  now - countUpDate;


  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);


  // Output the result in an element with id="demo"
  if (countUpLabel) {
    // countUpLabel.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    countUpLabel.innerHTML = `<span class='digits'>${days}<span class='digits-label'>days</span></span> 
                              <span class='digits'>${hours}<span class='digits-label'>hours</span></span> 
                              <span class='digits'>${minutes}<span class='digits-label'>minutes</span></span> 
                              <span class='digits'>${seconds}<span class='digits-label'>seconds</span></span> `;;
    countUpLabel.classList.remove('unseen');
  }

  // If the count down is over, write some text
  if (distance1 < 0) {
    clearInterval(x);
    countUpLabel && (countUpLabel.innerHTML = "EXPIRED");
  }
}, 1000);
