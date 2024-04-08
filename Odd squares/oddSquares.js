/*
Odd Squares

You are given an array of numbers. Your task is to implement a function called oddSquares that filters out the even numbers from the array and then maps the remaining numbers to their squares.

Example:
oddSquares([1, 2, 3, 4, 5, 6]); // should return [1, 9, 25]
oddSquares([10, 15, 20, 25, 30]); // should return [225, 625]

*/

const oddSquares = (numbers) => {
   let result = [];
   for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
         result.push(numbers[i] * numbers[i]);
      }
   }

   return result;
};

console.log(oddSquares([1, 2, 3, 4, 5, 6]));


//Using the filter amd map methods

const oddSquares2 = (numbers) => {
   return numbers.filter(item => item % 2 !== 0).map(item => item * item);
}

console.log(oddSquares2([1, 2, 3, 4, 5, 6]));