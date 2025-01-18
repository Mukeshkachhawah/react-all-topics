function factorial(n) {
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  console.log(fac);
}
factorial(5);
