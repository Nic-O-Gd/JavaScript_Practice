/*
Exercise 2.1: Price Filter

Create an arrow function filterByPrice that takes:

    An array of products (objects with name and price)
    A maximum price

Returns an array with only the products under that price.

*/

const filterByPrice = (array, maxPrice) => {
  return array.filter((array) => array.price <= maxPrice);
};
const products = [
  { name: "Book", price: 15 },
  { name: "Watch", price: 50 },
  { name: "Headset", price: 25 },
  { name: "Mouse", price: 10 },
];

const affordableProducts = filterByPrice(products, 30);
console.log(affordableProducts); // Output [{ name: 'Livre', price: 15 }, { name: 'Casque', price: 25 }, { name: 'Souris', price: 10 }]