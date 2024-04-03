const arrayStats = (arr) => {
   let sum = arr.reduce((acc, elt) => {
      return acc + elt;
   });

   let average = (sum / arr.length).toFixed(2);

   let max = Math.max(...arr);

   let min = Math.min(...arr);

   return {
     "sum":  sum,
      "average": average,
      "max": max,
      "min": min
   };

};

console.log(arrayStats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
