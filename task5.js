// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number) {
  if (number % 2 === 0) {
    const even = "even";
    return even;
  } else {
    const odd = "odd";
    return odd;
  }
}
//odd
const num = odd_even(5);
console.log("this number is : ", num);
//even
const num1 = odd_even(6);
console.log("this number is : ", num1);
