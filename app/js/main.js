 var clock = function() {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();
  // console.log(hours, minutes, seconds);
  var clock = hours + ":" + minutes + ":" + seconds;

  var timer = document.querySelector('#clock');
  timer.innerHTML = clock;
};

var time = setInterval(clock, 1000);
