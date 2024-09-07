// Task-4

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

//counter for count zero
let cnt = 0;

// function to calculate the of zero's
function count_zero(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      cnt++;
    }
  }
  console.log(cnt);
}

let s = "101101";
count_zero(s);
