class CustomPromise {
  constructor(executor) {
    this.onResolve = null;
    this.onReject = null;

    const resolve = (value) => {
      if (this.onResolve) {
        this.onResolve(value);
      }
    };

    const reject = (error) => {
      if (this.onReject) {
        this.onReject(error);
      }
    };

    executor(resolve, reject);
  }

  then(callback) {
    this.onResolve = callback;
    return this;
  }

  catch(callback) {
    this.onReject = callback;
    return this;
  }
}

const promise = new CustomPromise((resolve) => {
  setTimeout(() => resolve("Resolved after 2 seconds"), 2000);
});

promise.then((value) => {
  console.log(value);
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
});
