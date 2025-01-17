const obj = {
  name: "John",
  age: 30,
  city: {
    country: "USA",
  },
};
// const deepCopy = JSON.parse(JSON.stringify(obj));

obj.city.country = "UK";
console.log(obj.city.country); // USA
