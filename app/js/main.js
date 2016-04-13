 var clock = function() {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();
  // console.log(hours, minutes, seconds);
  var hour = (hours > 12) ? hours - 12 : hours;
  var newHour = (hour < 10) ? '0' + hour : hour;
  var min = (minutes < 10) ? '0' + minutes : minutes;
  var sec = (seconds< 10) ? '0' + seconds : seconds;

  // if ( hour < 10)
  //   return '0' + hour;


  var clock = newHour + ":" + min + ":" + sec;

  var timer = document.querySelector('#clock');
  timer.innerHTML = clock;
};

var time = setInterval(clock, 1000);
