angular
  .module('app')
  .filter('font_size', fontsize);

function fontsize() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<=max; i+=0.05)
      input.push(i.toFixed(2));
    return input;
  }
}
