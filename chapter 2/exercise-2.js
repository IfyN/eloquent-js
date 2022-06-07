//The Fizzbuzz challenge solution

for (let number = 1; number <= 100; number ++){
    result = "";
   
   if (number % 3 === 0) result += "Fizz" ;
   if  (number % 5 === 0) result += "Buzz";
    console.log (result || number);
 }

