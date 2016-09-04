angular
  .module('app')
  .filter('line_height', lineheight);

function lineheight() {
  return function(input, min, max) {
    min = parseFloat(min); //Make string input int
    max = parseFloat(max);
    for (var i=min; i<=max; i+=0.1)
      input.push(i.toFixed(1));
    return input;
  }
}
