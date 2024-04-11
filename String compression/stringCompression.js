/*
String Compression
You are given a string containing only uppercase letters. Your task is to implement a function called compressString that compresses the string by counting the consecutive occurrences of each letter and returning a new compressed string.

The compressed string should consist of each letter followed by its count. If a letter appears only once consecutively, you should include the count.

Example: 
compressString("AAAABBBCCDAA"); // should return "A4B3C2D1A2"
compressString("XYZ"); // should return "X1Y1Z1"

*/
const compressString = (str) => {
   let result = "";
   let count = 1;

   for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i + 1]) {
         count++;
      } else {
         result += str[i] + count;
         count = 1;
      }
   }

   return result;
};

console.log(compressString("AAAABBBCCDAA"));
console.log(compressString("XYZ"));