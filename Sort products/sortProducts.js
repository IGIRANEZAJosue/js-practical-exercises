/*
Sort products
You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending order.

*/

const sortProducts = (products) => {
   return products.sort((a, b) => a.price - b.price);
}

console.log(sortProducts([{ name: 'a', price: 200 }, { name: 'b', price: 100 }, { name: 'c', price: 125 }]));