// Task-2

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(num) {
  if (num % 2 === 1) {
    const multiply = num * 2;
    return multiply;
  } else {
    const divide = num / 2;
    return divide;
  }
}

const result = oddEven(8);
console.log(result);

const result1 = oddEven(5);
console.log(result1);
