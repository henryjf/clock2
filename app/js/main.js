 var clock = function() {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();
  console.log(hours, minutes, seconds);
};
var time = setInterval(clock, 1000);
//  return clock;
// console.log(clock);
var timer = document.querySelector('#clock');
inner.HTML
