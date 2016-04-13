
//Used the Date obj to get hours, minutes and seconds
  // var clock = function() {
  function clock () {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();

//Used ternary statements to set digits to proper settings
  var hour = (hours > 12) ? hours - 12 : hours;
  var newHour = (hour < 10) ? '0' + hour : hour;
  var min = (minutes < 10) ? '0' + minutes : minutes;
  var sec = (seconds< 10) ? '0' + seconds : seconds;

//Added expression to get ready for printing the correct code
    var time = '#' + newHour + min + sec;

//Used document.querySelector to locate where js will be inputted to page
  var timer = document.querySelector('#clock');
// Used innerHTML to display js to page
  timer.innerHTML = time;
// Used properties to access js to change background color in hexadecimal colors
  timer.style.backgroundColor = time;
};
//Used setInterval to call clock function every sec.
var colorClock = setInterval(clock, 1000);
