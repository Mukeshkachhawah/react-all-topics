import React from "react";
import UseFetch from "./UseFetch";

const UseMyCustomHook = () => {
  const { data } = UseFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <h1>UseMyCustomHook</h1>
      <ul>{data && data.map(({ title, id }) => <li key={id}>{title}</li>)}</ul>
    </>
  );
};

export default UseMyCustomHook;
