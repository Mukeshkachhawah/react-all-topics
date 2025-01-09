import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
  const clearInput = () => {
    inputRef.current.value = "";
  };
  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type something here" />
      <button onClick={focusInput}>Focus input</button>
      <button onClick={clearInput}>Clear input </button>
    </>
  );
};

export default UseRef;
