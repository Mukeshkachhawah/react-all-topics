import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("calaculating");
    for (let i = 0; i < 10000; i++) {}
    return num * 2;
  };

  const memorizedValue = useMemo(() => {
    expensiveCalculation(count, [count]);
  });

  return (
    <>
      <h1>useMemo example</h1>
      <p>Count: {count}</p>
      <p>Memoized Result: {memorizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Change Other State
      </button>
    </>
  );
};

export default UseMemo;
