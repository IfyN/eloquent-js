//The Fizzbuzz challenge solution

//solution 1:
for (let number = 1; number <= 100; number++) {
  let byBoth = "";

  if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(byBoth || number);
  }
}

//solution 2:

for (let number = 1; number <= 100; number++) {
  result = "";

  if (number % 3 === 0) result += "Fizz";
  if (number % 5 === 0) result += "Buzz";
  console.log(result || number);
}

//Both Output the same result
