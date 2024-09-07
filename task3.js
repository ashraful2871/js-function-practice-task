// Task-3

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers, size) {
  let sum = 0;
  for (let number of numbers) {
    sum = sum + number;
  }
  let avg = sum / size;

  return avg;
}

let num = [10, 20, 30, 40, 50];
let size = num.length;
let avg = make_avg(num, size);
console.log("average of the array is : ", avg);
