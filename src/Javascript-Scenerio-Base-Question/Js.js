const nestArray = [1, 2, 3, [4, 5, 6, [7, 8, 9], [10, 11, 12]]];
const flatedArray = nestArray.flat(Infinity);
console.log(flatedArray);
