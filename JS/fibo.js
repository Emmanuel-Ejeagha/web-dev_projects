// Fibonacci of numbers

function fibonacciGen(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (count = 2; count < n; count++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

output = fibonacciGen(5);
console.log(output);
