module.exports = function longestConsecutiveLength(array) {
  
  var max = 0;
  var count = 1;

  array.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < array.length; i ++) {
    if (array[i] == array[i + 1] - 1) {
      count += 1;
    } else if (array[i] < array[i + 1] - 1) {
      max = Math.max(count, max);
      count = 1;
    }
  }
  
  if (array.length == 1) {
    return 1;
  } else {
    return max;
  }
}