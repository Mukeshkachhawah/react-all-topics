const obj = {
  name: "John",
  age: 30,
  city: {
    country: "USA",
  },
};
const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.city.country = "UK";
console.log(obj.city.country); // USA

console.log(deepCopy.city.country); // UK